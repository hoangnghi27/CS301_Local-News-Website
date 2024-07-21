import "../../styles/Search.scss";
import React, { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import List from "./list";
import axios from 'axios';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_43665bc60ccb798f4acbdcecd542b8e2a684a&q=news&country=vi"
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  const fetchData = (value) => {
    const filteredData = data.filter((el) => {
      return el.title && el.title.toLowerCase().includes(value);
    });
    return filteredData;
  };

  const handleChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInput(lowerCase);
    const results = fetchData(lowerCase);
    setResults(results);
  };

  return (
    <div className='input-wrapper'>
      <SearchOutlined id='search-icon' />
      <input
        placeholder='Type to search...'
        value={input}
        onChange={(e) => handleChange(e)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <List results={fetchData(input)} />
    </div>
  );
};