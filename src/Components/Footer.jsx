import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/images/logo.svg";
import logolight from "../Assets/images/logo-light.svg"
import googleplay from "../Assets/images/client/google-play.svg"
import appstore from "../Assets/images/client/app-store.svg"

const Footer = () => {
  return (
    
    <footer className="pt-5 bg-light border-top border-primary">
  <div className="container">
    {/* Row START */}
    <div className="row g-4">
      {/* Widget 1 START */}
      <div className="col-lg-3">
        {/* logo */}
        <a className="navbar-brand" href="/">
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>
              MICROLEARNING
            </span> 
          </a>
          
        <p className="my-3">
          Eduport education theme, built specifically for the education centers
          which is dedicated to teaching and involve learners.{" "}
        </p>
        {/* Social media icon */}
        <ul className="list-inline mb-0 mt-3">
          <li className="list-inline-item">
            {" "}
            <Link
              className="btn btn-white btn-sm shadow px-2 text-facebook"
              to="https://www.facebook.com/MicrolearningCorporateTraining/"
            >
              <i className="fab fa-fw fa-facebook-f" />
            </Link>{" "}
          </li>
          <li className="list-inline-item">
            {" "}
            <Link
              className="btn btn-white btn-sm shadow px-2 text-instagram"
              to="https://www.instagram.com/micro_learning_/"
            >
              <i className="fab fa-fw fa-instagram" />
            </Link>{" "}
          </li>
          <li className="list-inline-item">
            {" "}
            <Link
              className="btn btn-white btn-sm shadow px-2 text-twitter"
              to="https://x.com/microlearning0"
            >
              <i className="fa-brands fa-x-twitter fa-fw " />
            </Link>{" "}
          </li>
          <li className="list-inline-item">
            {" "}
            <Link
              className="btn btn-white btn-sm shadow px-2 text-linkedin"
              to="https://www.linkedin.com/company/104394261/admin/dashboard/"
            >
              <i className="fab fa-fw fa-linkedin-in" />
            </Link>{" "}
          </li>
          <li className="list-inline-item">
            {" "}
            <Link
              className="btn btn-white btn-sm shadow px-2 text-linkedin"
              to="https://www.youtube.com/@microlearningcoachingcente2131"
            >
              <i className="fa-brands fa-youtube fa-fw " />
            </Link>{" "}
          </li>
          <li className="list-inline-item">
            {" "}
            <Link
              className="btn btn-white btn-sm shadow px-2 text-linkedin"
              to="https://t.me/Microlearni"
            >
              <i className="fa-brands fa-telegram fa-fw " />
            </Link>{" "}
          </li>
        </ul>
      </div>
      {/* Widget 1 END */}
      {/* Widget 2 START */}
      <div className="col-lg-6">
        <div className="row g-4">
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className="mb-2 mb-md-4">Company</h5>
            <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inquiry">
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className="mb-2 mb-md-4">Teaching</h5>
            <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link" to="/becomeinstructor">
                  Become a teacher
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/termsandconditions">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Widget 2 END */}
      {/* Widget 3 START */}
      <div className="col-lg-3">
        <h5 className="mb-2 mb-md-4">Contact</h5>
        {/* Time */}
        <p className="mb-2">
          Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
          <span className="d-block small">(9:AM to 8:PM IST)</span>
        </p>
        <p className="mb-0">
          Email:<span className="h6 fw-light ms-2">example@gmail.com</span>
        </p>
        
        {/* Row END */}
      </div>
      {/* Widget 3 END */}
    </div>
    {/* Row END */}
    {/* Divider */}
    <hr className="mt-4 mb-0" />
    {/* Bottom footer */}
    <div className="py-3">
      <div className="container px-0">
        <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
          {/* copyright text */}
          <div className="text-body text-primary-hover">
            {" "}
            Copyrights ©2024 {" "}
            <a
              href="https://www.webestica.com/"
              target="_blank"
              className="text-body"
            >
              Microlearning
            </a>
          </div>
          {/* copyright links*/}
          <div className="justify-content-center mt-3 mt-lg-0">
            <ul className="nav list-inline justify-content-center mb-0">
              <li className="list-inline-item">
                <Link className="nav-link" to="/termsandconditions">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="nav-link pe-0" to="/privacypolicy">
                  Privacy policy
                </Link>
              </li>
              <li className="list-inline-item">
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

export default Footer