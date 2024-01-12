import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function CheckOut() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div
      className="flex p-[20px] bg-[white] h-max "
      //   checkout
    >
      <div
      // checkout__left side of the page
      >
        <img
          className="w-[1500px] h-[70px]  mb-[1px] overflow-hidden cursor-pointer"
          // checkout_ad ADVERTISMENT
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1200px-Spotify_logo_horizontal_black.jpg"
          alt="Spotify-Clone Project"
          onClick={() => {
            window.open(
              "https://spotify-clone-ochre-nine-34.vercel.app/",
              "_blank"
            );
          }}
        />
        <div>
          <h2
            className="mr-[10px] p-[10px] border-b-[1px] border-solid border-gray-300  "
            //   checkout__title
          >
            Your Cart
          </h2>
          {/* checkoutProduct */}
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

      <div>
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
