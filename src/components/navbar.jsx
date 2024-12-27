import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
              <Link className="navbar-link" to="/">About</Link>
          </li>
          <li className="navbar-item">
              <Link className="navbar-link" to="/resume">Resume</Link>
          </li>
          <li className="navbar-item">
              <Link className="navbar-link" to="/portfolio">Portfolio</Link>
          </li>
          <li className="navbar-item">
              <Link className="navbar-link" to="/blog">blog</Link>
          </li>
          <li className="navbar-item">
              <Link className="navbar-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
