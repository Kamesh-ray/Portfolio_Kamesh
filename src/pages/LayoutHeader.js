import React from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/Style.css';

const LayoutHeader = () => {

    const headerData = {
          name: 'Kamesh.A',
  title: 'Web Application Developer'
    }

  return (
    <div>
        {/* HEADER */}
      <header className="container py-3 d-flex justify-content-between align-items-center border-bottom border-primary">
        <div>
          <h1 className="h3 mb-0" style={{color:"#7FFFD4"}}>{headerData.name}</h1>
          <small style={{color:"#00ff00"}}>{headerData.title}</small>
        </div>
        <nav>
  <NavLink 
    to="/" 
    className={({ isActive }) => 
      `me-3 text-decoration-none fw-bold ${isActive ? "active-link" : ""}`
    }
    style={{ color: "#0FF0FC" }}
  >
    Home
  </NavLink>

  <NavLink 
    to="/pages/Skillset" 
    className={({ isActive }) => 
      `me-3 text-decoration-none fw-bold ${isActive ? "active-link" : ""}`
    }
    style={{ color: "#0FF0FC" }}
  >
    Skills
  </NavLink>

  <NavLink 
    to="/pages/About" 
    className={({ isActive }) => 
      `me-3 text-decoration-none fw-bold ${isActive ? "active-link" : ""}`
    }
    style={{ color: "#0FF0FC" }}
  >
    About
  </NavLink>

  <NavLink 
    to="/pages/Projects" 
    className={({ isActive }) => 
      `me-3 text-decoration-none fw-bold ${isActive ? "active-link" : ""}`
    }
    style={{ color: "#0FF0FC" }}
  >
    Projects
  </NavLink>

  <NavLink 
    to="/pages/Contact" 
    className={({ isActive }) => 
      `me-3 text-decoration-none fw-bold ${isActive ? "active-link" : ""}`
    }
    style={{ color: "#0FF0FC" }}
  >
    Contact
  </NavLink>
</nav>
      </header>
    </div>
  )
}

export default LayoutHeader
