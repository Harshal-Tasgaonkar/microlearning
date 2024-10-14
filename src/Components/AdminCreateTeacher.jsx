import React, { useState } from "react";
import { ref, push, set, database } from "../firebase";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminCreateTeacher = () => {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [technology, setTechnology] = useState("");

  const navigate = useNavigate();

  // Function to convert strings to title case
  const toTitleCase = (str) => {
      return str
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Convert name and technology to title case before sending to Firebase
    const formattedName = toTitleCase(name);
    const formattedTechnology = toTitleCase(technology);

    const teacherRef = ref(database, "teachers");
    const newTeacherRef = push(teacherRef);
    const teacherID = newTeacherRef.key;

    const teacherData = {
      teacherID,
      name: formattedName,           // Title-cased name
      mobile,
      email,
      technology: formattedTechnology, // Title-cased technology
      createdAt: new Date().toISOString()
    };

    set(newTeacherRef, teacherData)
      .then(() => {
        alert("Teacher data submitted successfully!");

        // Clear the form fields
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
      <div className="page-content-wrapper border">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/adminteacherlist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="mx-auto">Create Teacher</h4>
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setMobile(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setTechnology(e.target.value)}
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

export default AdminCreateTeacher;
