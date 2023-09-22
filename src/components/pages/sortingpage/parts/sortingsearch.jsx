import React, { useState } from "react";
import "./sortingsearch.scss";


const SortingSearch=({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearchClick = () => {
    onSearch(keyword);
  };
  return (
    <>
    <div className="sortingsearch">
      <h2>Din guide</h2>
      <h2>til en sund affaldssortering</h2>
      <input
        type="text"
        placeholder="Søg på affald"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button onClick={handleSearchClick}></button>
      </div>
    </>
  );
}

export default SortingSearch;
