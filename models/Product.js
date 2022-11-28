const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    id: { type: Number },
    desc: { type: String },
    img: { type: String, required: true },
    categories: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
