import React from "react";

function Product({ title, image, price, rating }) {
  return (
    <div
      className="flex flex-col items-center justify-end m-[10px] 
      p-[20px] w-full max-h-[400px] min-w-[100px] bg-[white] z-[1] "
      //   product
    >
      <div
        className="h-[100px] mb-[15px] "
        // product__info i.e. title/name
      >
        <p>{title}</p>
        <p
          className="mt-[5px]"
          // product__price
        >
          <small>₹</small>
          <strong>{price} </strong>
        </p>
        <div
          className="flex"
          // product__rating
        >
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img
        className="max-h-[200px] w-full object-contain mb-[15px] "
        src={image}
        alt="Products images"
      />

      <button className="bg-[#f0c14b] border-[1px] border-solid mt-[10px] text-[#111]">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
