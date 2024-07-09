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
            <a href='#'>Tin tức</a>
          </li>
          <li>
            <a href='#'>Thể thao</a>
          </li>
          <li>
            <a href='#'>Trò chơi</a>
          </li>
          <li>
            <a href='#'>Tài chính</a>
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
