import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../Assets/images/logo.svg";
import logolight from "../Assets/images/logo-light.svg"

const InquiryHeader = () => {
  return (
   
    <header className="navbar-light navbar-sticky">
  {/* Logo Nav START */}
  <nav className="navbar navbar-expand-xl">
    <div className="container">
      {/* Logo START */}
      <a className="navbar-brand me-0" href="index-2.html">
        <img
          className="light-mode-item navbar-brand-item"
          src={logo}
          alt="logo"
        />
        <img
          className="dark-mode-item navbar-brand-item"
          src={logolight}
          alt="logo"
        />
      </a>
      {/* Logo END */}
      {/* Responsive navbar toggler */}
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-animation">
          <span />
          <span />
          <span />
        </span>
      </button>
      {/* Main navbar START */}
      <div className="navbar-collapse collapse" id="navbarCollapse">
        {/* Nav Search END */}
        <ul className="navbar-nav navbar-nav-scroll mx-auto">
          {/* Nav item 1 Home */}
          <Link
            className="nav-link  "
            to="/"
            id="demoMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </Link>
          {/* Nav item 2 Courses */}
          <Link
            className="nav-link "
            to="/coursecategories"
            id="demoMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Courses
          </Link>
          {/* Nav item 3 Batches */}
          <Link
            className="nav-link "
            to="#"
            id="accounntMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Batches
          </Link>
          {/* Nav item 4 Inquiry*/}
          <Link
            className="nav-link active"
            to="/inquiry"
            id="advanceMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Inquiry
          </Link>
        </ul>
      </div>
      {/* Main navbar END */}
      <div className="navbar-nav">
        <a href="sign-in.html" className="btn btn-sm btn-dark mb-0">
          <i className="fas fa-power-off me-1" />
          Login
        </a>
      </div>
    </div>
  </nav>
  {/* Logo Nav END */}
</header>


  )
}

export default InquiryHeader