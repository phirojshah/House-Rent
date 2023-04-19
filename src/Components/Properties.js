import React from "react";
import "./Properties.css";
import "typeface-roboto";
import Product from "./Product.js";

const product = {
  place: "Pani tanki",
  images: [
    {
      url: "https://cdn02.hamrobazaar.com/User/Posts/2023/4/8/69e49e80-8c81-4a9f-a930-88f54dfc00d2.webp?x-image-process=image/resize,m_lfit,h_500,w_500",
    },
  ],
  price: "रु3500",
  _id: "1",
};
const Properties = () => {
  return (
    <>
      <h2 className="header">Latest Rooms Near You</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Properties;
