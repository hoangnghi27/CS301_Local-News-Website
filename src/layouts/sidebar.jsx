import { Row, Col } from "antd";
import "../styles/Sidebar.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function Sidebar() {
  const [data, setData] = useState([]);

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
      });
  }, []);

  return (
    <div className='container'>
      <div className='side-bar'>
        {data &&
          data.map((item, index) => (
            <div
              className='break-news'
              key={index}>
              <Row
                gutter={16}
                className='card'>
                <Col
                  span={6}
                  className='card-img'>
                  <img
                    src={item.image_url}
                    alt=''
                  />
                </Col>
                <Col
                  span={18}
                  className='card-text'>
                  <div className='title'>
                    <div className='description'>{item.title}</div>
                    <div className='src'>
                      <span className='news-info'>{item.creator}</span>
                      <span className='news-time'>{item.pubDate}</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
