/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable max-len */
// eslint-disable-next-line object-curly-spacing
const { onRequest } = require("firebase-functions/v2/https");
// eslint-disable-next-line no-unused-vars
const logger = require("firebase-functions/logger");
const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  // eslint-disable-next-line indent
  // eslint-disable-next-line indent
  "sk_test_51Of6BYSCHzrKHmbJSLbFs5fqYwnfXjqhpqUbulzewXhYoG67UQWPJkm7aOsmEE852MjgZ8lwYv39UfKxb1Fy3pHS00ImJamPu0"
);

const app = express();

// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Received ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = onRequest(app);
