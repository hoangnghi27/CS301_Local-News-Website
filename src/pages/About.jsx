import { NavLink } from "react-router-dom";
import "../styles/About.scss";
import { EmailIcon } from "react-share";
import { EmailShareButton } from "react-share";
import { PhoneFilled } from "@ant-design/icons";
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
                <EmailShareButton url='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&osid=1&passive=1209600&service=mail&ifkv=AS5LTATh2HTZDl2Xmp8hSADCVPQqdtTTElkq6IkGKE99ygDHhWyj0M7yvmvpUMMfPTsDKx7o81BJkA&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
                  <EmailIcon
                    size={15}
                    round={true}
                    borderRadius={2}
                  />
                </EmailShareButton>
              </NavLink>
              <text>
                Email: <NavLink>localnews2024@gmail.com</NavLink>
              </text>
              <br />
              <PhoneFilled />
              <text>Hotline: 0902 547 276</text>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
