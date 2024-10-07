import React from 'react'

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
          src="images/logo.svg"
          alt="logo"
        />
        <img
          className="dark-mode-item navbar-brand-item"
          src="images/logo-light.svg"
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
          <a
            className="nav-link  "
            href="index-2.html"
            id="demoMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </a>
          {/* Nav item 2 Courses */}
          <a
            className="nav-link "
            href="course-categories.html"
            id="demoMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Courses
          </a>
          {/* Nav item 3 Batches */}
          <a
            className="nav-link "
            href="#"
            id="accounntMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Batches
          </a>
          {/* Nav item 4 Inquiry*/}
          <a
            className="nav-link active"
            href="book-class.html"
            id="advanceMenu"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Inquiry
          </a>
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