import "../../styles/Search.scss";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import List from "./list";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    // Update the API URL to a valid endpoint
    fetch("https://example.com/api/news?apikey=your-api-key&q=news&country=vi")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.results.filter((el) => {
          return el.text && el.text.toLowerCase().includes(value);
        });
        setResults(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInput(lowerCase);
    fetchData(lowerCase);
  };

  return (
    <div className='input-wrapper'>
      <SearchOutlined id='search-icon' />
      <input
        placeholder='Type to search...'
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
