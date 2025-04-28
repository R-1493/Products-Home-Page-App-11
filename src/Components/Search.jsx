import React from "react";

const Search = ({ search, setSearch, maxPrice, setMaxPrice }) => {
  return (
    <div className="my-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="form-control mb-4"
      />

      <label>Max Price: ${maxPrice}</label>
      <input
        type="range"
        min="0"
        max="1000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="form-range"
      />
    </div>
  );
};

export default Search;
