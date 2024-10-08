import React, { useState } from "react";
import { ref, push, database } from "../firebase"; 
import { Link, useNavigate } from 'react-router-dom';

const AdminCreateStudentForm = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // State for student data
  const [studentData, setStudentData] = useState({
    name: "",
    mobile: "",
    email: "",
    passoutYear: "",
    qualification: "",
    city: ""
  });

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
    e.preventDefault(); // Prevent page refresh

    // Reference to the "students" node in the Firebase Realtime Database
    const studentsRef = ref(database, "students");

    // Push new student data to Firebase with an auto-generated ID
    push(studentsRef, {
      name: studentData.name,
      mobile: studentData.mobile,
      email: studentData.email,
      passoutYear: studentData.passoutYear,
      qualification: studentData.qualification,
      city: studentData.city,
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
      {/* Top bar START */}
      {/* Top bar END */}
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        <div>
          <Link to="/adminstudentlist" className="btn  btn-dark ">
            Back
          </Link>
          <h4 className="text-center">Create Student</h4>
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
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Mobile</label>
              <input
                className="form-control"
                type="number"
                name="mobile"
                placeholder="Enter Mobile"
                value={studentData.mobile}
                onChange={handleInputChange}
              />
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
      {/* Page main content END */}
    </div>
  );
};

export default AdminCreateStudentForm;
