// src/components/ParentComponent.jsx
import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import List from "./list";

const ParentComponent = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchBar setResults={setResults} />
      <List
        results={results}
        searchTerm=''
      />
    </div>
  );
};

export default ParentComponent;
