import removeAccents from "../../utils/removeAccent";
import { SearchResult } from './SearchResult';
import "../../styles/List.scss"


function List({ results }) {
  return (
    // <ul>
    //   {data.map((item) => (
    //     <li key={item.article_id}>
    //       {item.keywords &&
    //         Array.from(
    //           new Set(item.keywords.filter((keyword) => keyword !== null))
    //         ).map((keyword) => <li key={keyword}>{removeAccents(keyword)}</li>)}
    //     </li>
    //   ))}
    // </ul>
    <div className="results-list">
      {results.map((result, id) => {
        {/* return <SearchResult result={result.keywords} key={id} />; */}
      })}
    </div>
  );
}

export default List;
