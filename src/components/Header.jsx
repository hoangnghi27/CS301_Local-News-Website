import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Weather from "./Weather";
import "../styles/Header.scss";
import Discover from "./Discover";

function Header() {
  return (
    <>
      <div className="header">
        <ul className="header-li">
          <li>
          <NavLink
              to="/discover"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Khám phá
            </NavLink>
          </li>
          <li>
            <a href="#">Tin tức</a>
          </li>
          <li>
            <a href="#">Thể thao</a>
          </li>
          <li>
            <a href="#">Trò chơi</a>
          </li>
          <li>
            <a href="#">Tài chính</a>
          </li>
          <li>
            <NavLink
              to="/weather"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Thời tiết
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
