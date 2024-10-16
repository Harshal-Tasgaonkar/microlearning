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

  // Function to convert a string to title case
  const toTitleCase = (str) => {
    return str
      .toLowerCase() // Convert to lowercase
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join words back together
  };

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

    // Check if any field is empty
    for (const field in student) {
      if (!student[field]) {
        alert("Please fill in all fields."); // Alert for empty fields
        return; // Stop form submission
      }
    }

    // Validate mobile number to be exactly 10 digits
    const mobilePattern = /^[0-9]{10}$/; // Regular expression for 10-digit mobile number
    if (!mobilePattern.test(student.mobile)) {
      alert("Mobile number must be exactly 10 digits."); // Alert for invalid mobile number
      return; // Stop form submission
    }

    // Create a copy of student data with title case for name and city
    const updatedStudentData = {
      ...student,
      name: toTitleCase(student.name), // Convert name to title case
      city: toTitleCase(student.city), // Convert city to title case
    };

    const studentRef = ref(database, `students/${studentID}`);
    update(studentRef, updatedStudentData)
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
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/adminstudentlist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="mx-auto">Edit Student</h4>
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
                required // Make this field mandatory
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Mobile</label>
              <input
                type="tel" // Use 'tel' for mobile input
                name="mobile"
                value={student.mobile}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Mobile"
                required // Make this field mandatory
                pattern="[0-9]{10}" // Ensure mobile number is 10 digits
              />
              <small className="form-text text-muted">Must be exactly 10 digits.</small>
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
                required // Make this field mandatory
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
                required // Make this field mandatory
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
                required // Make this field mandatory
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
                required // Make this field mandatory
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
