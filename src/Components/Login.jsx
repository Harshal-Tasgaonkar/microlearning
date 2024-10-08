import React, { useState, useEffect } from 'react';
import { ref, onValue, database } from "../firebase"; // Import Firebase reference and onValue function
import { useNavigate } from 'react-router-dom';
import jpg01 from "../Assets/images/avatar/01.jpg";
import jpg02 from "../Assets/images/avatar/02.jpg";
import jpg03 from "../Assets/images/avatar/03.jpg";
import jpg04 from "../Assets/images/avatar/04.jpg";
import svg02 from "../Assets/images/element/02.svg";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Fetch teacher data from Firebase on component mount
  useEffect(() => {
    const teachersRef = ref(database, 'teachers');
    onValue(teachersRef, (snapshot) => {
      const teachersData = snapshot.val();
      if (teachersData) {
        const formattedTeachers = Object.keys(teachersData).map((key) => ({
          teacherID: key,
          ...teachersData[key],
        }));
        setTeachers(formattedTeachers);
      }
    });

    // Fetch student data from Firebase
    const studentsRef = ref(database, 'students');
    onValue(studentsRef, (snapshot) => {
      const studentsData = snapshot.val();
      if (studentsData) {
        const formattedStudents = Object.keys(studentsData).map((key) => ({
          studentID: key,
          ...studentsData[key],
        }));
        setStudents(formattedStudents);
      }
    });
  }, []);

  // Handle the login button click for mobile number submission
  const handleLoginClick = () => {
    // Check if the entered mobile number exists in teacher or student data
    const isTeacher = teachers.find((t) => t.mobile === mobileNumber);
    const isStudent = students.find((s) => s.mobile === mobileNumber);

    if (isTeacher || isStudent || mobileNumber === '1111111111') {
      // If a valid mobile number, show the OTP field
      setShowOtpField(true);
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  // Handle the OTP submission and navigation
  const handleOtpSubmit = () => {
    if (otp === '1234') {
      // Navigate to the appropriate dashboard based on the entered mobile number
      if (mobileNumber === '1111111111') {
        navigate('/admindashboard'); // Admin Dashboard
      } else if (students.find((s) => s.mobile === mobileNumber)) {
        navigate('/studentdashboard'); // Student Dashboard
      } else {
        navigate('/teacherdashboard'); // Teacher Dashboard
      }
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            {/* Left Section */}
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                {/* Title */}
                <div className="text-center">
                  <h2 className="fw-bold">Welcome to our largest community</h2>
                  <p className="mb-0 h6 fw-light">Let's learn something new today!</p>
                </div>
                {/* SVG Image */}
                <img src={svg02} className="mt-5" alt="SVG" />
                {/* Info */}
                <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                  {/* Avatar group */}
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={jpg01} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={jpg02} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={jpg03} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={jpg04} alt="avatar" />
                    </li>
                  </ul>
                  {/* Content */}
                  <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* Title */}
                  <span className="mb-0 fs-1">👋</span>
                  <h1 className="fs-2">Login into Eduport!</h1>
                  <p className="lead mb-4">Nice to see you! Please log in with your account.</p>
                  {/* Form START */}
                  <form>
                    {/* Mobile Number */}
                    <div className="mb-4">
                      <label htmlFor="mobileNumber" className="form-label">Mobile *</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="fas fa-mobile" />
                        </span>
                        <input
                          type="number"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="Enter Mobile Number"
                          id="mobileNumber"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          maxLength="10"
                        />
                      </div>
                    </div>

                    {/* OTP Field (Initially Hidden) */}
                    {showOtpField && (
                      <div className="mb-4" id="otpField">
                        <label htmlFor="otp" className="form-label">Verify OTP *</label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="fas fa-lock" />
                          </span>
                          <input
                            type="number"
                            className="form-control border-0 bg-light rounded-end ps-1"
                            placeholder="Enter OTP"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
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
                          onClick={handleLoginClick}
                        >
                          Login
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary mb-0"
                          type="button"
                          onClick={handleOtpSubmit}
                        >
                          Submit OTP
                        </button>
                      )}
                    </div>
                  </form>
                  {/* Form END */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
