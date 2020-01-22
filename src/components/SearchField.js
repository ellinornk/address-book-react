import React from 'react';

export const SearchField = (props) => (
    <div>
      <input
        type="search"
        placeholder="Search..."
        onChange={props.handleInputChange}
        value={props.searchInput}
      />
    </div>
);
