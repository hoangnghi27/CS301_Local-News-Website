import { NavLink } from "react-router-dom";
import { LineStrokeColorVar } from "antd/es/progress/style";
import {
  HomeFilled,
  InfoCircleTwoTone,
  UserAddOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import React from "react";
import "../styles/Navbar.scss";
import { Input, Button } from "antd";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      TextDecoder: isActive ? "none" : "underline",
    };
  };

  return (
    <nav>
      <div className='default'>
        <NavLink
          style={navLinkStyles}
          to='/'>
          <span>
            <HomeFilled />
            <h2>Home</h2>
          </span>
        </NavLink>
        <NavLink
          style={navLinkStyles}
          to='/about'>
          <span>
            <InfoCircleTwoTone />
            <h2>About</h2>
          </span>
        </NavLink>
      </div>

      <div className='accounts'>
        <div className='search-bar'>
          <Input
            placeholder='Search...'
            size='medium'
          />
          <Button
            className='search-bar-btn'
            contentFontSizeLG
            contentLineHeight
            size='small'
            type='secondary'
            htmlType='submit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-search'
              viewBox='0 0 16 16'>
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
            </svg>
            <i className='bi bi-search'></i>
          </Button>
        </div>
        <NavLink
          style={navLinkStyles}
          to='/sign-up'>
          <span>
            <UserAddOutlined />
            <h2>Sign up</h2>
          </span>
        </NavLink>
        <NavLink
          style={navLinkStyles}
          to='/sign-in'>
          <span>
            <h2>Sign in</h2>
            <LoginOutlined />
          </span>
        </NavLink>
      </div>
    </nav>
  );
};
