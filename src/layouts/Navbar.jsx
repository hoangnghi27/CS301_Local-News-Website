<<<<<<< HEAD
import { NavLink, useNavigate } from "react-router-dom";
=======
import { NavLink } from "react-router-dom";
import { LineStrokeColorVar } from "antd/es/progress/style";
>>>>>>> f5ece962f9eab320c315312fdb245403b8cc62f8
import {
  HomeFilled,
  InfoCircleTwoTone,
  UserAddOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import "../styles/Navbar.scss";
<<<<<<< HEAD
import { getLocal, removeLocal } from "../utils/localStorage";
=======
import { Input, Button } from "antd";
>>>>>>> f5ece962f9eab320c315312fdb245403b8cc62f8

export const Navbar = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const accessToken = getLocal("accessToken");
    const userData = getLocal("userData");
    if (accessToken) {
      setLoggedUser(true);
      setUserData(userData);
    }
  }, []);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const handleLogout = () => {
    removeLocal("accessToken");
    removeLocal("userData");
    setLoggedUser(false);
    navigate("/");
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
<<<<<<< HEAD
        {loggedUser ? (
          <div className='user'>
            <NavLink
              style={navLinkStyles}
              to='/profile'>
              {/* Add content for profile link here */}
            </NavLink>
            <div
              className='flex items-center duration-300 hover:text-orange-400'
              onClick={handleLogout}>
              <LogoutOutlined className='rotate-180 me-2' />
              <span>Đăng xuất</span>
            </div>
            {userData && <div className='name'>{userData}</div>}
          </div>
        ) : (
          <div className='login'>
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
                <LoginOutlined />
                <h2>Sign in</h2>
              </span>
            </NavLink>
          </div>
        )}
=======
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
>>>>>>> f5ece962f9eab320c315312fdb245403b8cc62f8
      </div>
    </nav>
  );
};
