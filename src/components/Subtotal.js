import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";

function Subtotal() {
  const history = useNavigate();
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div
      className="flex flex-col justify-between w-[300px] h-[150px] p-[20px] bg-[#f3f3f3] border-[1px] border-solid border-[#dddddd] rounded-[3px]"
      //   subtotal
    >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small
              className="flex items-center"
              // subtotal__gift
            >
              <input className="mr-[5px]" type="checkbox" /> This order contains
              a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        className="bg-[#f0c14b] rounded-[2px] w-full h-[30px] border-[1px] border-solid mt-[10px] text-[#111]"
        onClick={(e) => history.push("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
