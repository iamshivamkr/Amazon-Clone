import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div
      className="
      h-[60px] flex items-center bg-[#131921] sticky top-[0] z-100 
    "
      //header
      // style={{ zIndex: 100 }}
    >
      <img
        className="w-[100px] object-contain mx-[20px] my-[0] mt-[18px]"
        //header__logo
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon"
      />
      <div
        className="flex flex-[1] items-center rounded-[24px]"
        // header__search
      >
        <input
          className="h-[12px] p-[10px] border-[none] w-full"
          type="text"
          // header__searchInput
        />
        <SearchIcon
          className="p-[5px] !h-[22px]  bg-yellow-600"
          // header__searchIcon
        />
      </div>

      <div
        className="flex justify-evenly"
        // header__nav
      >
        <div
          className="flex flex-col ml-[10px] mr-[10px] text-[white]"
          // header__option
        >
          <span
            className="text-[10px]"
            // header__optionLineOne
          >
            {" "}
            Hello User{" "}
          </span>
          <span
            className="text-[13px] font-extrabold "
            // header__optionLineTwo
          >
            {" "}
            Sign In{" "}
          </span>
        </div>
        <div
          className="flex flex-col ml-[10px] mr-[10px] text-[white]"
          // header__option
        >
          <span
            className="text-[10px]"
            // header__optionLineOne
          >
            {" "}
            Returns{" "}
          </span>
          <span
            className="text-[13px] font-extrabold "
            // header__optionLineTwo
          >
            {" "}
            Orders{" "}
          </span>
        </div>
        <div
          className="flex flex-col ml-[10px] mr-[10px] text-[white]"
          // header__option
        >
          <span
            className="text-[10px]"
            // header__optionLineOne
          >
            {" "}
            Your{" "}
          </span>
          <span
            className="text-[13px] font-extrabold "
            // header__optionLineTwo
          >
            {" "}
            Prime{" "}
          </span>
        </div>
        <div
          className="flex items-center text-[white]"
          // header__optionBasket
        >
          <ShoppingBasketIcon />
          <span
            className="text-[13px] font-extrabold ml-[10px] mr-[10px]"
            //header__optionLineTwo && header__basketCount
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
