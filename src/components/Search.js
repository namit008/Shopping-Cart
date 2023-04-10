import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../slices/searchBar";
import { useGetAllProductsQuery } from "../slices/productsApi";
const Search = () => {
  const dispatch = useDispatch();
  const searchVal = useSelector((state) => state.search.value);
  const [searchValue, setSearchVal] = useState("");
  const { data } = useGetAllProductsQuery();

  console.log(searchVal,searchValue);
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
useEffect(()=>{
  console.log("inside Usefffect")
},[])
  const handleChange = (value) => {
    dispatch(setSearchValue(value));
  };
  const onChange = (value) => {
    // dispatch(setSearchValue(value));
    // state is updated on every value change, so input will work
    setSearchVal(value);

    // call debounced request here
    optimizedFn(value);
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div className="searchBar">
      <input
        type="text"
        value={searchValue}
        placeholder="Search Your Product "
        style={{ width: "90%", height: "85%" }}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="dropdown">
        {data?.products
          .filter(
            (item) =>
              searchVal.length &&
              item.title?.toLowerCase().includes(searchVal.toLowerCase()) &&
              item.title?.toLowerCase() !== searchVal.toLowerCase()
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
};

export default Search;
