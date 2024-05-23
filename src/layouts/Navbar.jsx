import { NavLink } from 'react-router-dom';
import { HomeFilled, InfoCircleTwoTone, UserAddOutlined, LoginOutlined } from "@ant-design/icons";
import React from 'react';
import "../styles/Navbar.scss";
export const Navbar = () => {

  const navLinkStyles = ({ isActive }) => {
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      TextDecoder: isActive ? 'none' : 'underline',
    }
  }

  return (
    <nav>
        <div className='default'>
        <NavLink style={navLinkStyles} to='/'><span><HomeFilled /><h2>Home</h2></span></NavLink>
        <NavLink style={navLinkStyles} to='/about'><span><InfoCircleTwoTone /><h2>About</h2></span></NavLink>
        </div>
        <div className='accounts'>
        <NavLink style={navLinkStyles} to='/sign-up'><span><UserAddOutlined /><h2>Sign up</h2></span></NavLink>
        <NavLink style={navLinkStyles} to='/sign-in'><span><h2>Sign in</h2><LoginOutlined /></span></NavLink>
        </div>
    </nav>
  )
}
