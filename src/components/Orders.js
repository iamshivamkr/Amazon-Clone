import React, { useState, useEffect } from "react";
import { databas } from "../firebase";

import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      databas
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="px-[80px] py-[20px]">
      <h1>Your Orders</h1>

      <div className="mx-[0] my-[30px]">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
