// FilterContext.js
import React, { useState } from 'react';

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState({company:[],status:[]});

  const filterContextValue = {
    filterValue,
    setFilterValue,
  };

  return (
    <FilterContext.Provider value={filterContextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
