const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupon");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  const { couponApplied } = req.body;

  const user = await User.findOne({ email: req.user.email }).exec();
  const { cartTotal, totalAfterDiscount } = await Cart.findOne({
    orderedBy: user._id,
  }).exec();

  let finalAmount = 0.0;
  let tax = 0.0;
  let discount = 0;

  if (couponApplied && totalAfterDiscount) {
    finalAmount = Math.ceil(totalAfterDiscount * 100 * (1 + 2 / 102));
    tax = ((totalAfterDiscount * 2) / 102).toFixed(2);
    discount = cartTotal - totalAfterDiscount;
  } else {
    finalAmount = Math.ceil(cartTotal * 100 * (1 + 2 / 102));
    tax = ((cartTotal * 2) / 102).toFixed(2);
    discount = 0;
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount,
    currency: "inr",
  });
  console.log(finalAmount, cartTotal);
  res.send({
    discount: discount,
    tax: tax,
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    totalAfterDiscount,
    payable: finalAmount,
  });
};
