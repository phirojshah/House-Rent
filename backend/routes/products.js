const express = require("express");
const router = express.Router();
const Product = require("../models/productModels");
const ApiFeatures = require("../utils/apifeatures");

<<<<<<< HEAD
//ROUTE 1: Creating a product using : POST api/products/createproduct
=======
>>>>>>> 060a1add743bbc69817e70d9c90c5274fc2ec1cc
router.post("/createproduct", async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//ROUTE 2: Get all products using : GET api/products/getallproducts
router.get("/getallproducts", async (req, res) => {
  const resultPerPage = 5;
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const productsCount = await Product.countDocuments();
  const product = await apiFeature.query;
  res.status(200).json({
    success: true,
    product,
    productsCount,
  });
});

//ROUTE 3: Getting product details using : GET api/products/getproductdetails
router.get("/getproductdetails/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
      productsCount,
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
});
//ROUTE 4: Updating product using : PUT api/products/updateproducts/:id id should be the objectid of details
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

//ROUTE 5: Deleting product using : DELETE api/products/deleteproduct/:id id should be the objectid of details
router.delete("/deleteproduct/:id", async (req, res) => {
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
