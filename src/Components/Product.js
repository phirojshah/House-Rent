import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <>
      <div className="container">
        <a href={`/product ${product._id}`}>
          <img src={product.image} />
        </a>
      </div>
    </>
  );
};

export default Product;
