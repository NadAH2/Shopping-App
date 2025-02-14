const router = require("express").Router();

// const KEY = process.env.STRIPE_KEY;
// const stripe = require("stripe")(KEY);
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51LjrA7GImAgWVt0bLt8tiMt2d8JcBKcCbLGFcLa9kMu3h5AXNmXjdzbSIJkTzoQrgMs3y7Df9DQdAVGxLfvCraKx00YjvZdVoV"
);
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

// // const router = require("express").Router();
// // const stripe = require("stripe")(process.env.STRIPE_KEY);

// // router.post("/payment", (req, res) => {
// //   stripe.charges.create(
// //     {
// //       source: req.body.tokenId,
// //       amount: req.body.amount,
// //       currency: "usd",
// //     },
// //     (stripeErr, stripeRes) => {
// //       if (stripeErr) {
// //         res.status(500).json(stripeErr);
// //       } else {
// //         res.status(200).json(stripeRes);
// //       }
// //     }
// //   );
// // });

// // module.exports = router;

// const express = require("express");
// const Stripe = require("stripe");
// const { Order } = require("../models/Order");

// require("dotenv").config();

// const stripe = Stripe(process.env.STRIPE_KEY);

// const router = express.Router();

// router.post("/create-checkout-session", async (req, res) => {
//   const customer = await stripe.customers.create({
//     metadata: {
//       userId: req.body.userId,
//       cart: JSON.stringify(req.body.products),
//     },
//   });

//   const line_items = req.body.products.map((item) => {
//     return {
//       price_data: {
//         currency: "usd",
//         product_data: {
//           title: item.title,
//           images: [item.image],
//           description: item.desc,
//           metadata: {
//             id: item.id,
//           },
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     };
//   });

//   const session = await stripe.checkout.sessions.create({
//     //     payment_method_types: ["card"],
//     //     shipping_address_collection: {
//     //       allowed_countries: ["US", "CA", "KE"],
//     //     },
//     //     shipping_options: [
//     //       {
//     //         shipping_rate_data: {
//     //           type: "fixed_amount",
//     //           fixed_amount: {
//     //             amount: 0,
//     //             currency: "usd",
//     //           },
//     //           display_name: "Free shipping",
//     //           // Delivers between 5-7 business days
//     //           delivery_estimate: {
//     //             minimum: {
//     //               unit: "business_day",
//     //               value: 5,
//     //             },
//     //             maximum: {
//     //               unit: "business_day",
//     //               value: 7,
//     //             },
//     //           },
//     //         },
//     //       },
//     //       {
//     //         shipping_rate_data: {
//     //           type: "fixed_amount",
//     //           fixed_amount: {
//     //             amount: 1500,
//     //             currency: "usd",
//     //           },
//     //           display_name: "Next day air",
//     //           // Delivers in exactly 1 business day
//     //           delivery_estimate: {
//     //             minimum: {
//     //               unit: "business_day",
//     //               value: 1,
//     //             },
//     //             maximum: {
//     //               unit: "business_day",
//     //               value: 1,
//     //             },
//     //           },
//     //         },
//     //       },
//     //     ],
//     //     phone_number_collection: {
//     //       enabled: true,
//     //     },
//     line_items,
//     mode: "payment",
//     customer: customer.id,
//     success_url: "http://localhost:3000/checkout-success",
//     cancel_url: "http://localhost:3000/cart",
//   });

//   // res.redirect(303, session.url);
//   res.send({ url: session.url });
//   // });

//   // // Create order function

//   // const createOrder = async (customer, data) => {
//   //   const Items = JSON.parse(customer.metadata.cart);

//   //   const products = Items.map((item) => {
//   //     return {
//   //       productId: item.id,
//   //       quantity: item.cartQuantity,
//   //     };
//   //   });

//   //   const newOrder = new Order({
//   //     userId: customer.metadata.userId,
//   //     customerId: data.customer,
//   //     paymentIntentId: data.payment_intent,
//   //     products,
//   //     subtotal: data.amount_subtotal,
//   //     amount: data.amount,
//   //     address: data.address,
//   //     status: data.status,
//   //   });

//   //   try {
//   //     const savedOrder = await newOrder.save();
//   //     console.log("Processed Order:", savedOrder);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // // Stripe webhoook

//   // router.post(
//   //   "/webhook",
//   //   express.json({ type: "application/json" }),
//   //   async (req, res) => {
//   //     let data;
//   //     let eventType;

//   //     // Check if webhook signing is configured.
//   //     let webhookSecret;
//   //     //webhookSecret = process.env.STRIPE_WEB_HOOK;

//   //     if (webhookSecret) {
//   //       // Retrieve the event by verifying the signature using the raw body and secret.
//   //       let event;
//   //       let signature = req.headers["stripe-signature"];

//   //       try {
//   //         event = stripe.webhooks.constructEvent(
//   //           req.body,
//   //           signature,
//   //           webhookSecret
//   //         );
//   //       } catch (err) {
//   //         console.log(`⚠️  Webhook signature verification failed:  ${err}`);
//   //         return res.sendStatus(400);
//   //       }
//   //       // Extract the object from the event.
//   //       data = event.data.object;
//   //       eventType = event.type;
//   //     } else {
//   //       // Webhook signing is recommended, but if the secret is not configured in `config.js`,
//   //       // retrieve the event data directly from the request body.
//   //       data = req.body.data.object;
//   //       eventType = req.body.type;
//   //     }

//   //     // Handle the checkout.session.completed event
//   //     if (eventType === "checkout.session.completed") {
//   //       stripe.customers
//   //         .retrieve(data.customer)
//   //         .then(async (customer) => {
//   //           try {
//   //             // CREATE ORDER
//   //             createOrder(customer, data);
//   //           } catch (err) {
//   //             console.log(typeof createOrder);
//   //             console.log(err);
//   //           }
//   //         })
//   //         .catch((err) => console.log(err.message));
//   //     }

//   //     res.status(200).end();
// });

// module.exports = router;
