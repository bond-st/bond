import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/logo-black.png";
import links from "../assets/video-links/links.json";

const Nav = () => {
  const currentPath = window.location.hash.slice(1);

  const renderSubMenu = (category) => {
    return links[category].map((video) => (
      <div key={video.title} className="sub-menu">
        <HashLink
          to={`/${category}#${video.title}`}
          className="menu-link nav-menu-link sub-link"
        >
          {video.title}
        </HashLink>
      </div>
    ));
  };

  return (
    <nav className="nav">
      <NavLink to="/">
        <img src={logo} alt="Bond Street logo" className="logo-nav" />
      </NavLink>
      <div className="menu nav-menu">
        {["edit", "unit"].map((category) => (
          <React.Fragment key={category}>
            <NavLink
              to={`/${category}`}
              className={({ isActive }) =>
                `menu-link nav-menu-link${isActive ? " active" : ""}`
              }
            >
              <p className={currentPath === `/${category}` ? "bold-title" : ""}>
                {category.toUpperCase()}
              </p>
            </NavLink>
            {currentPath === `/${category}` && renderSubMenu(category)}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
