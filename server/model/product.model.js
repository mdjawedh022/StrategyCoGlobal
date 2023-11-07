const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    Title: String,
    Year: String,
    imdbID: String,
    Type: String,
    Poster: String,
    Rating: Number,
    Cat: String,
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = {
  ProductModel,
};
