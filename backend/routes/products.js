const express = require("express");
const router = express.Router();
const Product = require("../models/productModels");

router.post("/createproduct", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//get all products
router.get("/getallproducts", async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
});

//get product details
router.get("/getproductdetails", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//update products
router.put("/updateproducts/:id", async (req, res) => {
  //params is a property of the req (request) object in Node.js that allows to extract parameters from the URL
  // req.params.id is used to extract the id parameter from the URL
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      //retruns json response with http status code 500 indicates error if product is not found
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndMondify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

router.put("/deleteproduct/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
});

module.exports = router;
