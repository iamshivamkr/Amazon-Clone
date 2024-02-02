import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div
      className="
      h-[60px] flex items-center bg-[#131921] sticky top-[0] z-100 
    "
      //header
    >
      <Link to="/">
        <img
          className="w-[100px] object-contain mx-[20px] my-[0] mt-[18px]"
          //header__logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
          onClick={() => {
            console.log("Home Clicked!!!!!!!!!");
          }}
        />
      </Link>
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
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthenticaton}
            className="flex flex-col ml-[10px] mr-[10px] text-[white]"
            // header__option
          >
            <span
              className="text-[10px]"
              // header__optionLineOne
            >
              Hello {!user ? "Guest" : user.email}
            </span>
            <span
              className="text-[13px] font-extrabold "
              // header__optionLineTwo
            >
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div
            onClick={handleAuthenticaton}
            className="flex flex-col ml-[10px] mr-[10px] text-[white]"
            // header__option
          >
            <span
              className="text-[10px]"
              // header__optionLineOne
            >
              Returns
            </span>
            <span
              className="text-[13px] font-extrabold "
              // header__optionLineTwo
            >
              & Orders
            </span>
          </div>
        </Link>

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
        <Link to="/checkout">
          <div
            className="flex items-center text-[white]"
            // header__optionBasket
          >
            <ShoppingBasketIcon />
            <span
              className="text-[13px] font-extrabold ml-[10px] mr-[10px]"
              //header__optionLineTwo && header__basketCount
            >
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
