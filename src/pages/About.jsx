import { NavLink } from "react-router-dom";
import "../styles/About.scss";
import { MailOutlined } from "@ant-design/icons";

export default function About() {
  return (
    <div className='container'>
      <div className='description'>
        <h2 className='pt-3'>About us</h2>
        <p className='des-head'>
          <div className='des-body'>
            We are developers who want to deliver a website for everyone to read
            a collection of news from official and verified local sources with
            convinience.
          </div>
          <div className='des-body-members'>
            <br />
            Our team:
            <br />
            <br />
          </div>
          <div className='members'>
            <text>
              <li>
                Main Developer: Nguyen Dinh Anh Hao
                <br />
                <br />
              </li>
              <li>
                Project Manager: Le Nguyen Hoang Nghi
                <br />
                <br />
              </li>
              <li>
                Team member: Tao Cam Xuong
                <br />
                <br />
              </li>
            </text>
          </div>
          <div className='contact'>
            <div className='contact-head'>
              <text>
                Contact us:
                <br />
              </text>
            </div>
            <div className='contact-body'>
              <NavLink>
                <MailOutlined />
              </NavLink>
              <text>Email: localnews2024@gmail.com</text>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
