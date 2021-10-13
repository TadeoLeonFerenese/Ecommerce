const mongoose = require("mongoose");
const Product = require("./productModel");
const Orderchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  Products: [Product],
  status: {
    required: true,
    enum: ["Pending", "Rejected", "Completed"],
    type: String,
  },
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    dafault: Date.now(),
  },
});

module.exports = mongoose.model("Order", Orderchema);
