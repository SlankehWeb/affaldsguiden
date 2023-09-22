import SortingCards from "./parts/sortingcards";
import SortingSearch from "./parts/sortingsearch";
import axios from "axios";
import React, { useState } from "react";


const SortingPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (keyword) => {
  try {
    const response = await axios.get(`http://localhost:4000/search/${keyword}?` );
    setSearchResults(response.data);
  } catch (error) {
    console.error("Error fetching search results:", error);
    setSearchResults([]);
  }
};
    return (
      <>
      <SortingSearch onSearch={handleSearch}/>
      <SortingCards data={searchResults}/>
      </>
    );
  };
  
  export default SortingPage;
  