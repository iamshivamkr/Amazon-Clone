import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import { databas } from "../firebase";

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // eslint-disable-next-line no-unused-vars
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        databas
          .collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="bg-white ">
      <div
      //   payment__container
      >
        <h1
          className=" text-center p-[10px] font-normal bg-gray-200 border-b border-solid border-gray-300
       "
        >
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        <div
          className="flex p-[20px] mx-[20px] my-0 border-b border-solid border-gray-300 "
          // payment__section
        >
          <div
            className="flex-[0.2]"
            //   payment__title
          >
            <h3 className="pb-[20px]">Delivery Address</h3>
          </div>
          <div
            className="flex-[0.8]"
            //   payment__address
          >
            <p>{user?.email}</p>
            <p>Whole Address</p>
          </div>
        </div>
        <div
          className="flex p-[20px] mx-[20px] my-0 border-b border-solid border-gray-300 "
          // payment__section
        >
          <div
            className="flex-[0.2]"
            //   payment__title
          >
            <h3 className="pb-[20px]">Review items and delivery</h3>
          </div>
          <div
            className="flex-[0.8]"
            //   payment__items
          >
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div
          className="flex p-[20px] mx-[20px] my-0 border-b border-solid border-gray-300 "
          // payment__section
        >
          <div
            className="flex-[0.2]"
            //   payment__title
          >
            <h3 className="pb-[20px]">Payment Method</h3>
          </div>
          <div
            className="flex-[0.8]"
            //   payment__details
          >
            {/* Stripe */}
            <form className="max-w-[400px]" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div
                className="bg-[#f0c14b] rounded-[2px]  w-full h-[25px] border-t-[#a88734] border-b-[#846a29] border-r-[#9c7e31] border-l-[#9c7e31]  border-[1px]  border-solid font-[bolder] mt-[10px]  text-[#111]"
                // payment__priceContainer
              >
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
