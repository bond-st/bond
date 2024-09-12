import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo-black.png";
import links from "../video-links/links.json";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Bond Street logo" className="logo-nav" />
      </Link>
      <div className="menu nav-menu">
        {["edit", "unit"].map((page) => (
          <React.Fragment key={page}>
            <Link to={`/${page}`} className="menu-link nav-menu-link">
              <p className={currentPath === page ? "bold-title" : ""}>
                {page.toUpperCase()}
              </p>
            </Link>
            {currentPath === page &&
              links[page].map((video) => (
                <div key={video.title} className="sub-menu">
                  <Link
                    to={`/${page}#${video.title}`}
                    className="menu-link nav-menu-link sub-link"
                  >
                    {video.title}
                  </Link>
                </div>
              ))}
          </React.Fragment>
        ))}

        {/* mobile version of sub-menu */}
        {["edit", "unit"].map(
          (page) =>
            currentPath === page &&
            links[page].map((video) => (
              <div key={video.title} className="sub-menu sub-menu-mobile">
                <Link
                  to={`/${page}#${video.title}`}
                  className="menu-link nav-menu-link sub-link-mobile"
                >
                  {video.title}
                </Link>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Nav;
