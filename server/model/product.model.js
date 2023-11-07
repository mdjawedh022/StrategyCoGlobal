const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: String,
    img: String,
    text: String,
    rating: Number,
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = {
  ProductModel
};
