import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <header className="navbar-light navbar-sticky header-static">
  {/* Nav START */}
  <nav className="navbar navbar-expand-xl">
    <div className="container-fluid px-3 px-xl-5">
      {/* Logo START */}
      <a className="navbar-brand" href="#">
        <img
          className="light-mode-item navbar-brand-item"
          src="images/logo.svg"
          width="142.43"
          height={36}
          alt="logo"
        />
        <img
          className="dark-mode-item navbar-brand-item"
          src="images/logo-light.svg"
          width="142.43"
          height={36}
          alt="logo"
        />
      </a>
      {/* Logo end */}
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
      <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
        {/* Nav category menu START */}
        <ul className="navbar-nav navbar-nav-scroll me-auto">
          {/* Nav item 1 Demos */}
          <li className="nav-item dropdown dropdown-menu-shadow-stacked">
            <a
              className="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0 dropdown-toggle"
              href="#"
              id="categoryMenu"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Courses</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="categoryMenu">
              {/* Dropdown submenu */}
              <li>
              <Link to="/coursedetail" className="dropdown-item ">web Development</Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Design </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Data Science </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Mobile Development </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Marketing </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">IT &amp; software </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Programing Language </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Software Testing </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Software Engineering </Link>
              </li>
              <li>
              <Link to="/coursedetail" className="dropdown-item ">Software Development Tools </Link>
              </li>
              <li>
                {" "}
                <hr className="dropdown-divider" />
              </li>
              <li>
                
                <Link
                  className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0"
                 to="/courselist"
                >
                  View all courses
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* Nav category menu END */}
        {/* Nav Main menu START */}
        <ul className="navbar-nav navbar-nav-scroll me-auto">
          {/* Nav item 1 Home */}
          <NavLink
            className="nav-link "  activeClassName="active"
           to="/"
            id="demoMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </NavLink>
          {/* Nav item 2 Courses */}
          <NavLink
            className="nav-link "  activeClassName="active"
            to="/coursecategories"
            id="pagesMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Courses
          </NavLink>
          {/* Nav item 3 Batches */}
          <NavLink
            className="nav-link "  activeClassName="active"
            to="/teacherdashboard"
            id="accounntMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Batches
          </NavLink>
          {/* Nav item 4 Inquiry*/}
          <NavLink
            className="nav-link"  activeClassName="active"
            to="/inquiry"
            id="advanceMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Inquiry
          </NavLink>
        </ul>
        {/* Nav Main menu END */}
        {/* Nav Search START */}
        <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
          <div className="nav-item w-100">
            <form className="position-relative">
              <input
                className="form-control pe-5 bg-transparent"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit"
              >
                <i className="fas fa-search fs-6 " />
              </button>
            </form>
          </div>
        </div>
        {/* Nav Search END */}
      </div>
      {/* Main navbar END */}
      {/* Login button START */}
      <div className="navbar-nav">
        <Link to="/login" className="btn btn-sm btn-dark mb-0">
          <i className="fas fa-power-off me-1" />
          Login
        </Link>
      </div>
      {/* Login button END */}
    </div>
  </nav>
  {/* Nav END */}
</header>

  )
}

export default Navbar