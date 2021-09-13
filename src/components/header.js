import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../assets/scss/_header.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="logo">
            <li>
              <StaticImage
                src="../images/logo.png"
                alt="logo"
                width={40}
                height={40}
              />
            </li>
          </div>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
