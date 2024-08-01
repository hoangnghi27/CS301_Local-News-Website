import { NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/Header.scss";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const onMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='header'>
        <div
          id='menu-icon'
          className='menu-icon'
          onClick={onMenuClick}>
          <MenuOutlined />
        </div>
        <ul className={`header-li ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to='/discover'
              style={navLinkStyles}>
              Khám phá
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/news'
              style={navLinkStyles}>
              Tin tức
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sport'
              style={navLinkStyles}>
              Thể thao
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/games'
              style={navLinkStyles}>
              Trò chơi
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/finance'
              style={navLinkStyles}>
              Tài chính
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/weather'
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}>
              Thời tiết
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
