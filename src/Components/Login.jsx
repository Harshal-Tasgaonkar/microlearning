import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const navigate = useNavigate();

  // Handle the login button click for mobile number submission here
  const handleLoginClick = () => {
    if (mobileNumber.length === 10) {
      // Assuming mobile number validation succeeds
      setShowOtpField(true); // Show the OTP field
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  // Handle the OTP submission and conditional navigation based on mobile number
  const handleOtpSubmit = () => {
    if (otp.length === 4) {
      // Check the mobile number and navigate to the corresponding dashboard
      switch (mobileNumber) {
        case '1111111111':
          navigate('/admindashboard'); // Navigate to AdminDashboard
          break;
        case '2222222222':
          navigate('/teacherdashboard'); // Navigate to TeacherDashboard
          break;
        case '3333333333':
          navigate('/studentdashboard'); // Navigate to StudentDashboard
          break;
        default:
          alert('Invalid mobile number or OTP.'); // Handle invalid input
          break;
      }
    } else {
      alert('Please enter a valid 4-digit OTP');
    }
  };
 

  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            {/* left */}
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                {/* Title */}
                <div className="text-center">
                  <h2 className="fw-bold">Welcome to our largest community</h2>
                  <p className="mb-0 h6 fw-light">
                    Let's learn something new today!
                  </p>
                </div>
                {/* SVG Image */}
                <img src="images/element/02.svg" className="mt-5" alt="" />
                {/* Info */}
                <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                  {/* Avatar group */}
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/avatar/02.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/avatar/03.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/avatar/04.jpg"
                        alt="avatar"
                      />
                    </li>
                  </ul>
                  {/* Content */}
                  <p className="mb-0 h6 fw-light ms-0 ms-sm-3">
                    4k+ Students joined us, now it's your turn.
                  </p>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* Title */}
                  <span className="mb-0 fs-1">👋</span>
                  <h1 className="fs-2">Login into Eduport!</h1>
                  <p className="lead mb-4">
                    Nice to see you! Please log in with your account.
                  </p>
                  {/* Form START */}
                  <form>
                    {/* Mobile Number */}
                    <div className="mb-4">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Mobile *
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="fas fa-mobile" />
                        </span>
                        <input
                          type="number"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="Enter Mobile Number"
                          id="exampleInputEmail1"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)} // Update state
                          maxLength="10"
                        />
                      </div>
                    </div>

                    {/* OTP Field (Initially Hidden) */}
                    {showOtpField && (
                      <div className="mb-4" id="otpField">
                        <label htmlFor="inputPassword5" className="form-label">
                          Verify OTP *
                        </label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="fas fa-lock" />
                          </span>
                          <input
                            type="number"
                            className="form-control border-0 bg-light rounded-end ps-1"
                            placeholder="Enter OTP"
                            id="inputPassword5"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)} // Update state
                            maxLength="4"
                          />
                        </div>
                      </div>
                    )}

                    {/* Button */}
                    <div className="d-grid">
                      {!showOtpField ? (
                        <button
                          className="btn btn-primary mb-0"
                          type="button"
                          onClick={handleLoginClick} // First button click to show OTP field
                        >
                          Login
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary mb-0"
                          type="button"
                          onClick={handleOtpSubmit} // Second button click to submit OTP and navigate
                        >
                          Submit OTP
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              {/* Row END */}
            </div>
          </div>
          {/* Row END */}
        </div>
      </section>
    </main>
  );
}

export default Login;
