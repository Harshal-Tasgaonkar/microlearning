import React, { useState } from "react";
import { ref, push, set, database } from "../firebase";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminCreateTeacher = () => {

  // State variables to store form input values
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [technology, setTechnology] = useState("");

  // Initialize navigate function
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Generate a unique TeacherID by using the push function
    const teacherRef = ref(database, "teachers"); // Reference to the teachers node in the database
    const newTeacherRef = push(teacherRef); // Generate a new key for the teacher
    const teacherID = newTeacherRef.key; // Get the unique TeacherID

    // Prepare the teacher data with a createdAt timestamp
    const teacherData = {
      teacherID, // Add the generated TeacherID
      name,
      mobile,
      email,
      technology,
      createdAt: new Date().toISOString() // Add current timestamp
    };

    // Save the teacher data to Firebase
    set(newTeacherRef, teacherData)
      .then(() => {
        alert("Teacher data submitted successfully!");

        // Clear the form fields after successful submission
        setName("");
        setMobile("");
        setEmail("");
        setTechnology("");

        // Navigate to the AdminTeacherList component
        navigate("/adminteacherlist");
      })
      .catch((error) => {
        console.error("Error writing to the database:", error);
      });
  };

  return (
    <div className="page-content">
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        <div>
          <Link to="/adminteacherlist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="text-center">Create Teacher</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Teacher Name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state on input change
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Mobile</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)} // Update state on input change
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Technology</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Technology"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)} // Update state on input change
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
      {/* Page main content END */}
    </div>
  );
};

export default AdminCreateTeacher;
