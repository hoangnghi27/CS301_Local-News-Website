import "../styles/Home.scss";
import { Row, Col } from "antd";
import Sidebar from "../layouts/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
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
    <>
      <div className="container">
        {/* Body */}
        <div className="body">
          <Row gutter={16}>
            <Col span={16} className="gallery">
              <div className="host-news">
                {data &&
                  data.map((item) => (
                    <div className="news" key={item.article_id}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="card">
                          <div className="card-header">
                            <img src={item.image_url} alt="" />
                          </div>
                          <div className="card-body">
                            <div className="title">
                              <div className="description">{item.title}</div>
                              <div className="src">
                                <ul>
                                  <span className="news-info">
                                    {item.creator}
                                  </span>
                                  <span className="news-time">
                                    {item.pubDate}
                                  </span>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <hr />
                    </div>
                  ))}
              </div>
            </Col>
            {/* Side bar */}
            <Col span={8}>
              <Sidebar />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
