import React from 'react';
import './SearchBar.css'; // Styles for SearchBar

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search events..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
