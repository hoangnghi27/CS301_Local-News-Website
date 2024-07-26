import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <>
      <div className='header'>
        <ul className='header-li'>
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
