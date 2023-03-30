import React from "react";
import { addToCart, getTotals } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Category = ({ product }) => {
  const dispatch = useDispatch();
  const category = product.category;
  const data = product.catData;
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };
  return (
    <div>
      <div style={{ display: "flex", marginTop: "4rem" }}>
        <h1>
          <b>
            Category
          </b>{" "}
          : {category.toUpperCase()}
        </h1>
      </div>
      <div className="products">
        {data.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <img src={product.images[0]} alt={product.name} />
            <div className="details">
              <span>{product.description}</span>
              <span className="price">${product.price}</span>
            </div>
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
