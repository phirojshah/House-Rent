const express = require("express");
const router = express.Router();
const {
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productControllers");

router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);
module.exports = router;
