import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import Sidebar from "../layouts/Sidebar";
import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
  XIcon,
} from "react-share";

function Weather() {
  const [data, setData] = useState();

  useEffect(() => {
    const lat = "10.82302";
    const lon = "106.62965";
    const apiKey = "2388e442878e626ec34d7ad4f42fb3bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Set the data to state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      Weather
      <div className='container'>
        {/* Body */}
        <div className='body'>
          <Row gutter={16}>
            <Col
              span={16}
              className='gallery'>
              <div className='host-news'>
                {data &&
                  data.map((item) => (
                    <div
                      className='news'
                      key={item.article_id}>
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <div className='card'>
                          <div className='card-header'>
                            <img
                              src={item.image_url}
                              alt=''
                            />
                          </div>
                          <div className='card-body'>
                            <div className='title'>
                              <div className='description'>{item.title}</div>
                              <div className='src'>
                                <ul>
                                  <NavLink>
                                    <li>
                                      <FacebookShareButton
                                        url='https://www.facebook.com/'
                                        children=''>
                                        <FacebookIcon
                                          size={14.5}
                                          round={true}></FacebookIcon>
                                      </FacebookShareButton>
                                    </li>
                                  </NavLink>
                                  <NavLink>
                                    <li>
                                      <TwitterShareButton
                                        url='https://x.com/'
                                        children=''>
                                        <XIcon
                                          size={14.5}
                                          round={true}></XIcon>
                                      </TwitterShareButton>
                                    </li>
                                  </NavLink>
                                  <NavLink>
                                    <li>
                                      <LinkedinShareButton
                                        url='https://www.linkedin.com/'
                                        children=''>
                                        <LinkedinIcon
                                          size={14.5}
                                          round={true}></LinkedinIcon>
                                      </LinkedinShareButton>
                                    </li>
                                  </NavLink>
                                  <span className='news-info'>
                                    {item.creator}
                                  </span>
                                  <span className='news-time'>
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
    </div>
  );
}

export default Weather;
