// src/components/List.jsx
import React from "react";
import removeAccents from "../../utils/removeAccent";
import { SearchResult } from "./SearchResult";
import "../../styles/List.scss";

function List({ results, searchTerm }) {
  return (
    <div className='results-list'>
      {results
        .filter((item) => {
          const lowerCaseSearchTerm = removeAccents(searchTerm.toLowerCase());
          const name =
            typeof item.keywords === "string"
              ? removeAccents(item.keywords.toLowerCase())
              : "";

          return name.includes(lowerCaseSearchTerm);
        })
        .map((result, index) => (
          <SearchResult
            key={index}
            result={result.keywords}
          />
        ))}
    </div>
  );
}

export default List;
