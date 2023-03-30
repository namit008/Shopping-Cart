import React, { useCallback } from "react";

function SearchBar({ setSearch }) {
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

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div style={style}>
      <input
        type="text"
        placeholder="Search Your Product "
        style={{ width: "40%", height: "35px" }}
        onChange={(e) => optimizedFn(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
