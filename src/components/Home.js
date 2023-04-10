import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { React, useState } from "react";
// import { useHistory } from "react-router";
import { addToCart, getTotals } from "../slices/cartSlice";
import { setSearchValue } from "../slices/searchBar";
// import { useGetAllProductsQuery } from "../slices/productsApi";
import NavBar from "./NavBar";
// import SearchBar from "./SearchBar";
import { useEffect } from "react";
import Category from "./Category";

const Home = () => {
  const { status } = useSelector((state) => state.products);
  const searchVal = useSelector((state) => state.search.value);
  const [page, setPage] = useState(0);
  const [showScroll, setShowScroll] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const categry = new Set(data?.map((value) => value.category));
  const [finalData, setFinalData] = useState([]);
  const handleScroll = (event) => {
    if (!showScroll && window.pageYOffset > 500) {
      console.log(window.pageYOffset, "window.pageYOffset");
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      console.log(window.pageYOffset, "window.pageYOffset");
      setShowScroll(false);
    }

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 10);
    }
  };
  useEffect(() => {
    dispatch(setSearchValue(""));
    console.log("inside Useeffect");
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?skip=${page}&limit=10`
      );
      const responseData = response.data;
      console.log(responseData, "responseData");
      if (page === 0) {
        setData(responseData.products);
      } else {
        setData((prev) => [...prev, ...responseData.products]);
      }
    };
    const fetchSearchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=100`
      );
      const responseData = response.data;
      console.log(responseData, "responseData");
      setData(responseData.products);
      setPage(0);
    };
    if (searchVal.length) {
      fetchSearchData();
    } else {
      fetchData();
    }
  }, [page, searchVal]);

  useEffect(() => {
    const innerFinalData = [];
    categry?.forEach((element) => {
      const innerdata = { category: element, catData: [] };
      console.log(data, "data");
      data?.forEach((value) => {
        if (value.category === element) {
          innerdata.catData.push(value);
        }
      });
      innerFinalData.push(innerdata);
    });
    setFinalData(innerFinalData);
  }, [data]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <NavBar />
          {/* <SearchBar setSearch={(s) => setSearch(s)} /> */}
          <div className="products">
            {searchVal.length
              ? data &&
                data
                  ?.filter((product) =>
                    product.title
                      ?.toLowerCase()
                      .includes(searchVal.toLowerCase())
                  )
                  .reverse()
                  .map((product) => (
                    <div
                      style={{ marginTop: "4rem" }}
                      key={product.id}
                      className="product"
                    >
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
                  ))
              : finalData?.map((product) => {
                  return (
                    <div key={product.category}>
                      <Category product={product} />
                    </div>
                  );
                })}
            {showScroll && (
              <button className="scroll" onClick={() => scrollTop()}>
                <span className="glyphicon glyphicon-chevron-up"></span>
              </button>
            )}
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
