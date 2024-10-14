import React from 'react';

const AdminFooter = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row py-3">
          {/* Footer Content in a Single Line */}
          <div className="col-lg-12 d-flex justify-content-between align-items-center">
            {/* Copyright Text */}
            <div className="text-body text-primary-hover">
              <a href="https://www.webestica.com/" target="_blank" rel="noopener noreferrer" className="text-body"></a>
            </div>

            {/* Right-Aligned Links */}
            <ul className="nav list-inline mb-0">
              <li className="list-inline-item"><a className="nav-link" href="#">  Copyrights ©2024 Eduport. Built by Webestica</a> </li>
              <li className="list-inline-item"><a className="nav-link" href="#/about">About Us</a></li>
              <li className="list-inline-item"><a className="nav-link" href="#/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminFooter;
