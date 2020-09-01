import React from 'react'
import SearchBox from './SearchBox';

const SearchBox = ({placeholder, handleChange}) => (
  
    <div>
      <input type='search'
      placeholder={placeholder}
      onChange={handleChange}
      />

    </div>
)
   
  


export default SearchBox;
