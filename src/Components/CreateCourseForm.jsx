import React, { useState } from "react";
import { database, ref, set, push } from "../firebase"; // import push for unique ID generation
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const CreateCourseForm = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseMode, setCourseMode] = useState("Online");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Use useNavigate to programmatically navigate
  const navigate = useNavigate();

  // Function to add the course to Firebase
  const addCourse = (courseData) => {
    const courseID = push(ref(database, "courses")).key; // Generate a unique key for the course
    const teacherID = uuidv4(); // Generate a unique UUID for the teacher

    const courseRef = ref(database, `courses/${courseID}`);
    set(courseRef, {
      courseID,
      teacherID,
      ...courseData,
      createdAt: new Date().toISOString(), // Add timestamp for course creation
    })
      .then(() => {
        alert("Course data submitted successfully!");
        navigate("/admincourselist"); // Redirect to AdminCourseList after submission
      })
      .catch((error) => {
        console.error("Error writing to database: ", error);
      });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      courseName,
      courseDescription,
      courseDuration,
      courseMode,
      startDate,
      endDate,
    };

    addCourse(courseData); // Call the addCourse function with form data
  };

  return (
    <div className="page-content">
      {/* Top bar START */}
      {/* Top bar END */}
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        <div>
          <Link to="/admincourselist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="text-center">Create Course</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Description</label>
              <textarea
                className="form-control"
                placeholder="Enter Course Description"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Duration</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Course Duration"
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Mode</label>
              <select
                className="form-control"
                value={courseMode}
                onChange={(e) => setCourseMode(e.target.value)}
              >
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">End Date</label>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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

export default CreateCourseForm;
