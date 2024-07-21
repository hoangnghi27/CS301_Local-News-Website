import removeAccents from "../../utils/removeAccent";
import { SearchResult } from "./SearchResult";
import "../../styles/List.scss";

function List({ results, searchTerm }) {
  return (
    <div className='results-list'>
      {results.map((result, index) => (
        <SearchResult
          key={index}
          result={result.keywords}
        />
      ))}
    </div>
  );
}

export default List;
