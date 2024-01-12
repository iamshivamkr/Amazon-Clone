import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div
      className="flex mt-[20px] mb-[20px] "
      //   checkoutProduct
    >
      <img
        className="object-contain w-[180px] h-[180px] "
        // checkoutProduct__image
        src={image}
        alt="Product Img"
      />
      <div
        className="pl-[20px]"
        //checkoutProduct__info
      >
        <p
          className="text-[17px] font-extrabold"
          // checkoutProduct__title
        >
          {title}
        </p>
        <p>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div
          className="flex"
          //checkoutProduct__rating
        >
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button
            className="bg-[#f0c14b] border-[1px] border-solid mt-[10px] text-[#111] "
            onClick={removeFromCart}
          >
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
