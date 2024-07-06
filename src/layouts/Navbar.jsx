import { NavLink, renderMatches, useNavigate } from "react-router-dom";
import { LineStrokeColorVar } from "antd/es/progress/style";
import {
  HomeFilled,
  InfoCircleTwoTone,
  UserAddOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import "../styles/Navbar.scss";
import { getLocal, removeLocal } from "../utils/localStorage";
import { SearchBar } from "../components/Search/SearchBar";

export const Navbar = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(false);
  const [userData, setUserData] = useState(null);
  const username = getLocal("username");
  const [results, setResults] = useState([]);

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
    removeLocal("username");
    removeLocal("accessToken");
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
      <div className='search'>
        <SearchBar />
      </div>

      <div className='accounts'>
        {loggedUser ? (
          <div className='user'>
            <NavLink
              style={navLinkStyles}
              to='/profile'>
              <span>
                <UserOutlined />
                {username}
              </span>
            </NavLink>
            <div
              className='flex items-center duration-300 hover:text-orange-400'
              onClick={handleLogout}>
              <LogoutOutlined className='rotate-180 me-2' />
              <span>Log out</span>
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
      </div>
    </nav>
  );
};
