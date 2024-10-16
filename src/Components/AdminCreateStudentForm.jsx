import React, { useState } from "react";
import { ref, push, database } from "../firebase";
import { Link, useNavigate } from 'react-router-dom';

const AdminCreateStudentForm = () => {
  const navigate = useNavigate();

  // State for student data
  const [studentData, setStudentData] = useState({
    name: "",
    mobile: "",
    email: "",
    passoutYear: "",
    qualification: "",
    city: ""
  });

  // Function to convert strings to title case
  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const field in studentData) {
      if (!studentData[field]) {
        alert("Please fill in all fields."); // Alert for empty fields
        return; // Stop form submission
      }
    }

    // Validate mobile number to be exactly 10 digits
    const mobilePattern = /^[0-9]{10}$/; // Regular expression for 10-digit mobile number
    if (!mobilePattern.test(studentData.mobile)) {
      alert("Mobile number must be exactly 10 digits."); // Alert for invalid mobile number
      return; // Stop form submission
    }

    // Convert name and city to title case before sending to Firebase
    const formattedName = toTitleCase(studentData.name);
    const formattedCity = toTitleCase(studentData.city);

    // Reference to the "students" node in the Firebase Realtime Database
    const studentsRef = ref(database, "students");

    // Push new student data to Firebase with an auto-generated ID
    push(studentsRef, {
      name: formattedName,           // Use title-cased name
      mobile: studentData.mobile,
      email: studentData.email,
      passoutYear: studentData.passoutYear,
      qualification: studentData.qualification,
      city: formattedCity,           // Use title-cased city
    })
      .then(() => {
        alert("Student data added successfully!");
        // Reset form after successful submission
        setStudentData({
          name: "",
          mobile: "",
          email: "",
          passoutYear: "",
          qualification: "",
          city: ""
        });

        // Navigate to the student list page after successful submission
        navigate("/adminstudentlist");
      })
      .catch((error) => {
        console.error("Error adding student data:", error);
      });
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/adminstudentlist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="mx-auto">Create Student</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Student Name"
                value={studentData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Mobile</label>
              <input
                className="form-control"
                type="tel" // Changed type to 'tel' for mobile input
                name="mobile"
                placeholder="Enter Mobile"
                value={studentData.mobile}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}" // HTML pattern for 10-digit number
              />
              <small className="form-text text-muted">Must be exactly 10 digits.</small>
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={studentData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Passout Year</label>
              <input
                type="number"
                className="form-control"
                name="passoutYear"
                placeholder="Enter Passout Year"
                value={studentData.passoutYear}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Latest Qualification</label>
              <input
                type="text"
                className="form-control"
                name="qualification"
                placeholder="Enter Latest Qualification"
                value={studentData.qualification}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="Enter City"
                value={studentData.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-3 mt-3 d-flex justify-content-end float-end">
            <button type="submit" className="btn btn-primary w-75">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateStudentForm;
