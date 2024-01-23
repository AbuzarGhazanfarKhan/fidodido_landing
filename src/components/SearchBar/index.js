import React, { useState } from 'react';

const SearchBar = () => {
 const [searchTerm, setSearchTerm] = useState('');

 const handleInputChange = event => {
    setSearchTerm(event.target.value);
 };

 return (
    <input type="text" value={searchTerm} onChange={handleInputChange} />
 );
};

export default SearchBar;
