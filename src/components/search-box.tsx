import React from 'react';
import '../styles/search-box.css';

const SearchBox = () => {
  return (
    <div className="search">
      <input placeholder="Search..." />
      <i className="ms-Icon ms-Icon--Search"></i>
    </div>
  );
};
export default SearchBox;
