import "./App.css";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import { useEffect } from "react";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51Of6BYSCHzrKHmbJSVJ7HNj9tuPTcRKZTvghjc6JgEquL59PBqbsgrMuTzRnHlKz4VIpj18UhM7IqvHcC9TNZmle00T56VJteW"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        {/* Put the header outsite bcz we dont want to repeat it as route uses */}
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          ></Route>
          <Route path="/login" element={<LogIn />}></Route>

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
