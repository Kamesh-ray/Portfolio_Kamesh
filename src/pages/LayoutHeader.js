import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Style.css";

const LayoutHeader = () => {
  const headerData = {
    name: "Kamesh.A",
    title: "Web Application Developer",
  };

  return (
    <header className="container py-3 border-bottom border-primary">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          {/* Left Side - Name & Title */}
          <div className="d-flex flex-column">
            <h1 className="h4 mb-0" style={{ color: "#7FFFD4" }}>
              {headerData.name}
            </h1>
            <small style={{ color: "#00ff00" }}>{headerData.title}</small>
          </div>

          {/* Hamburger Toggle for Mobile */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Nav Links */}
          <div className="collapse navbar-collapse mt-3 mt-md-0" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? "active-link" : ""}`
                  }
                  style={{ color: "#0FF0FC" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pages/Skillset"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? "active-link" : ""}`
                  }
                  style={{ color: "#0FF0FC" }}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pages/About"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? "active-link" : ""}`
                  }
                  style={{ color: "#0FF0FC" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pages/Projects"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? "active-link" : ""}`
                  }
                  style={{ color: "#0FF0FC" }}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pages/Contact"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? "active-link" : ""}`
                  }
                  style={{ color: "#0FF0FC" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LayoutHeader;
