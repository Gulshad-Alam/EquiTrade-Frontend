import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white border-bottom p-0">
      <div className="container-fluid ">
        <NavLink className="navbar-brand" to="/">
          <img
            className="ms-5"
            style={{ width: "150px" }}
            src={logo}
            alt="navbar logo"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" collapse navbar-collapse justify-content-end me-5 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item me-3">
              <NavLink className="nav-link" aria-current="page" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" aria-current="page" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" aria-current="page" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" aria-current="page" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" aria-current="page" to="/support">
                Support
              </NavLink>
            </li>
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-bars" style={{ color: "black" }}></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
