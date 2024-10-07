import React, { useState, useEffect } from "react";
import { ref, onValue, update, database } from "../firebase"; // Firebase functions
import { useParams, useNavigate, Link } from "react-router-dom"; // React Router hooks

const AdminEditTeacher = () => {
  const { teacherID } = useParams(); // Get teacherID from URL
  const navigate = useNavigate(); // React Router v6 hook for navigation

  // State to hold teacher data
  const [teacherData, setTeacherData] = useState({
    name: "",
    mobile: "",
    email: "",
    technology: "",
  });

  // Fetch existing teacher data when component loads
  useEffect(() => {
    const teacherRef = ref(database, `teachers/${teacherID}`); // Reference to teacher by ID
    onValue(teacherRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTeacherData(data); // Set fetched data to state
      }
    });
  }, [teacherID]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission to update Firebase
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    const teacherRef = ref(database, `teachers/${teacherID}`); // Reference to specific teacher

    // Update teacher data in Firebase
    update(teacherRef, teacherData)
      .then(() => {
        alert("Teacher updated successfully.");
        navigate("/adminteacherlist"); // Redirect to admin teacher list
      })
      .catch((error) => {
        console.error("Error updating teacher:", error);
      });
  };

  return (
    <div className="page-content">
      {/* Top bar START */}

      {/* Top bar END */}
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        <div>
          <Link to="/adminteacherlist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="text-center">Edit Teacher</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={teacherData.name}
                onChange={handleChange}
                placeholder="Enter Teacher Name"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Mobile</label>
              <input
                className="form-control"
                type="number"
                name="mobile"
                value={teacherData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={teacherData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Technology</label>
              <input
                type="text"
                className="form-control"
                name="technology"
                value={teacherData.technology}
                onChange={handleChange}
                placeholder="Enter Technology"
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

export default AdminEditTeacher;
