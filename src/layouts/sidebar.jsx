import { Row, Col } from "antd";
import "../styles/Sidebar.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function Sidebar() {
  const [data, setData] = useState([]);

  const options = {
    method: "POST",
    url: "https://newsnow.p.rapidapi.com/newsv2",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "baa7e6d3a6mshd6755e9987d6b6bp18206cjsn062136048e49",
      "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
    },
    data: {
      query: "AI",
      time_bounded: true,
      from_date: "01/02/2021",
      to_date: "05/06/2021",
      location: "us",
      language: "en",
      page: 1,
    },
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        setData(response.data.news);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="side-bar">
        {data &&
          data.map((item, index) => (
            <div className="break-news" key={index}>
              <Row gutter={16} className="card">
                <Col span={6} className="card-img">
                  <img src={item.top_image} alt="" />
                </Col>
                <Col span={18} className="card-text">
                  <div className="title">
                    <div className="description">{item.short_description}</div>
                    <div className="src">
                      <span className="news-info">{item.publisher.title}</span>
                      <span className="news-time">{item.date}</span>
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
