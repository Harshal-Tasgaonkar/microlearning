import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ref, get, update, database } from "../firebase";

const AdminEditStudentForm = () => {
  // Get the studentID from the URL
  const { studentID } = useParams();

  // Initialize the navigate hook
  const navigate = useNavigate();

  // State for student details
  const [student, setStudent] = useState({
    name: "",
    mobile: "",
    email: "",
    passoutYear: "",
    qualification: "",
    city: "",
  });

  // Fetch the student data when the component mounts
  useEffect(() => {
    const studentRef = ref(database, `students/${studentID}`);
    get(studentRef).then((snapshot) => {
      if (snapshot.exists()) {
        setStudent(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, [studentID]);

  // Handle form changes
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle form submission to update student data
  const handleSubmit = (e) => {
    e.preventDefault();

    const studentRef = ref(database, `students/${studentID}`);
    update(studentRef, student)
      .then(() => {
        console.log("Student data updated successfully");
        // Navigate to the student list after successful update
        navigate("/adminstudentlist");
      })
      .catch((error) => {
        console.error("Error updating student:", error);
      });
  };

  return (
    <div className="page-content">
      {/* Top bar START */}
      {/* Top bar END */}
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        <div>
          <Link to="/adminstudentlist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="text-center">Edit Student</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Student Name"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Mobile</label>
              <input
                type="number"
                name="mobile"
                value={student.mobile}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Mobile"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Passout Year</label>
              <input
                type="number"
                name="passoutYear"
                value={student.passoutYear}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Passout Year"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Latest Qualification</label>
              <input
                type="text"
                name="qualification"
                value={student.qualification}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Latest Qualification"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">City</label>
              <input
                type="text"
                name="city"
                value={student.city}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter City"
              />
            </div>
          </div>
          <div className="col-md-3 mt-3 d-flex justify-content-end float-end">
            <button type="submit" className="btn btn-primary w-75">
              Update
            </button>
          </div>
        </form>
      </div>
      {/* Page main content END */}
    </div>
  );
};

export default AdminEditStudentForm;
