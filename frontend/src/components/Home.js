import { useDispatch, useSelector } from "react-redux";
import { React, useState } from "react";
// import { useHistory } from "react-router";
import { addToCart,getTotals } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Home = () => {
  const { status } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  // const history = useHistory();
  const { data } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
    dispatch(getTotals());

    // history.push("/cart");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <NavBar />
          <SearchBar setSearch={(s) => setSearch(s)} />
          <div className="products">
            {data &&
              data?.products
                ?.filter((product) =>
                  product.title?.toLowerCase().includes(search.toLowerCase())
                )
                .reverse()
                .map((product) => (
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
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
