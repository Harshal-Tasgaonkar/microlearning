import React from 'react'

const InquiryFooter = () => {
  return (
   
    <footer className="bg-light pt-5">
    <div className="container">
      {/* Row START */}
      <div className="row g-4 justify-content-between">
        {/* Widget 1 START */}
        <div className="col-md-5 col-lg-4">
          {/* logo */}
          <a className="me-0" href="index-2.html">
            <img
              className="light-mode-item h-40px"
              src="images/logo.svg"
              alt="logo"
            />
            <img
              className="dark-mode-item h-40px"
              src="images/logo-light.svg"
              alt="logo"
            />
          </a>
          <p className="my-3">
            Eduport education theme, built specifically for the education centers
            which is dedicated to teaching and involve learners.
          </p>
          {/* Newsletter */}
          <form className="row row-cols-lg-auto g-2">
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-dark m-0">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {/* Widget 1 END */}
        {/* Widget 2 START */}
        <div className="col-md-7 col-lg-6">
          <div className="row g-4 g-lg-5">
            {/* Link block */}
            <div className="col-6 col-sm-4">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact-us.html">
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="book-class.html">
                    Inquiry
                  </a>
                </li>
              </ul>
            </div>
            {/* Link block */}
            <div className="col-6 col-sm-4">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link pt-0" href="become-instructor.html">
                    Become a teacher
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Link block */}
            <div className="col-6 col-sm-4">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link pt-0"
                    href="https://www.facebook.com/MicrolearningCorporateTraining/"
                  >
                    <i className="fab fa-facebook-square text-facebook me-2" />
                    Facebook
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/micro_learning_/"
                  >
                    <i className="fab fa-instagram-square text-instagram-gradient me-2" />
                    Instagram
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://x.com/microlearning0">
                    <i className="fab fa-twitter-square text-twitter me-2" />
                    Twitter
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/company/104394261/admin/dashboard/"
                  >
                    <i className="fab fa-linkedin text-linkedin me-2" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Widget 2 END */}
      </div>
      {/* Row END */}
      <hr /> {/* Divider */}
      {/* Bottom footer */}
      <div className="row">
        <div className="col-12">
          <div className="d-md-flex justify-content-between align-items-center pt-2 pb-4 text-center">
            {/* copyright text */}
            <div className="text-primary-hover">
              {" "}
              Copyrights ©2024 Eduport. Build by{" "}
              <a
                href="https://www.webestica.com/"
                target="_blank"
                className="text-reset"
              >
                Webestica
              </a>
              .
            </div>
            {/* copyright links*/}
            <div className="nav justify-content-center mt-3 mt-md-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="nav-link" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="nav-link" href="#">
                    Privacy policy
                  </a>
                </li>
                <li className="list-inline-item pe-0">
                  <a className="nav-link" href="#">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  

  )
}

export default InquiryFooter