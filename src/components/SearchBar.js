import React, { useCallback, useState } from "react";
import { useGetAllProductsQuery } from "../slices/productsApi";
function SearchBar({ setSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const { data } = useGetAllProductsQuery();
  const style = {
    // backgroundColor: "black",
    // display: "flex",
    // justifyContent: "center",
    // padding: "5px",
    // marginTop: "3rem",
    // right: 0,
    // width: "100%",
    // position: "fixed",
    right: "0px",
    width: "100%",
    position: "fixed",
    /* margin-left: 11%; */
    marginRight: "20%",
    paddingLeft: "58%",
    paddingRight: "0%",
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    setSearch(value);
  };
  const onChange = (value) => {
    // state is updated on every value change, so input will work
    setSearchValue(value);

    // call debounced request here
    optimizedFn(value);
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div style={style}>
      <input
        type="text"
        value={searchValue}
        // value={(e)=>e.target.value || searchValue}
        placeholder="Search Your Product "
        style={{ width: "40%", height: "35px" }}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="dropdown">
        {data?.products
          .filter(
            (item) =>
              searchValue &&
              item.title?.toLowerCase().includes(searchValue.toLowerCase()) &&
              item.title?.toLowerCase() !== searchValue.toLowerCase()
          )
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onChange(item.title)}
              className="dropdown-row"
              key={item.title}
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
