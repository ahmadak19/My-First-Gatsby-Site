import * as React from "react";
import { Link } from "gatsby";
import "../assets/scss/_layout.scss";

export const Layout = ({ PageTitle, children }) => {
  return (
    <div className="container">
      <title>{PageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="heading">{PageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
