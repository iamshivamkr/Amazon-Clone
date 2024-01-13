import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div
      className="bg-[white] h-screen flex flex-col items-center"
      //   login
    >
      <Link to="/">
        <img
          className="mt-[20px] mb-[20px] object-contain w-[100px] mr-auto ml-auto"
          //   login__logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div
        className="w-[300px] h-[fit-content] flex flex-col rounded-[5px] border-[1px] border-solid border-[lightgray] p-[20px]"
        //   login__container
      >
        <h1 className="font-medium mb-[20px]">Sign-in</h1>

        <form>
          <h5 className="mb-[5px]">E-mail</h5>
          <input
            className="h-[30px] mb-[10px] bg-gray-100 w-[98%] "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="mb-[5px]">Password</h5>
          <input
            className="h-[30px] mb-[10px] bg-gray-100 w-[98%] "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="bg-[#f0c14b] rounded-[2px] w-full h-[30px] border-[1px] border-solid mt-[10px] border-t-[#a88734] border-r-[#9c7e31] border-b-[#846a29] "
          >
            Sign In
          </button>
        </form>

        <p className="mt-[15px] text-[12px]">
          By continuing, you agree to Amazon's{" "}
          <a
            className="text-blue-600"
            href="https://www.amazon.com//gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
          >
            {" "}
            Conditions of Use{" "}
          </a>{" "}
          and{" "}
          <a
            className="text-blue-600"
            href="https:/www.amazon.com//gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"
          >
            {" "}
            Privacy Notice.{" "}
          </a>
        </p>

        <div className="text-center relative top-[5px] pt-[1px] mb-[1px] leading-none  ">
          <h5 className="" aria-level="5">
            New to Amazon?
          </h5>
        </div>

        <button
          onClick={register}
          className="rounded-[2px] w-full h-[30px] border-[1px] border-solid mt-[10px] border-[darkgray] bg-zinc-200  "
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LogIn;
