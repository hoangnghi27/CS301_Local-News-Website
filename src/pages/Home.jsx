import "../styles/Home.scss";
import { Row, Col } from "antd";
import Sidebar from "../layouts/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FacebookShareButton } from "react-share";
import { TwitterShareButton } from "react-share";
import { LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon, XIcon } from "react-share";

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
    </>
  );
};
