import React, { useState, useEffect } from "react";
import { ref, get, set, database } from "../firebase";
import { Link, useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const EditCourseForm = () => {
  const { courseID } = useParams(); // Get the courseID from the route parameter
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseMode, setCourseMode] = useState("Online");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Fetch course data on component mount
  useEffect(() => {
    const courseRef = ref(database, `courses/${courseID}`);
    get(courseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const courseData = snapshot.val();
          // Set the form fields with the fetched course data
          setCourseName(courseData.courseName);
          setCourseDescription(courseData.courseDescription);
          setCourseDuration(courseData.courseDuration);
          setCourseMode(courseData.courseMode);
          setStartDate(courseData.startDate);
          setEndDate(courseData.endDate);
        } else {
          console.log("No data available for the given courseID");
        }
      })
      .catch((error) => {
        console.error("Error fetching course data: ", error);
      });
  }, [courseID]); // Run this effect only when courseID changes

  // Handle form submission to update the course in Firebase
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare updated data
    const updatedCourseData = {
      courseName,
      courseDescription,
      courseDuration,
      courseMode,
      startDate,
      endDate,
    };

    // Reference to the specific course in Firebase
    const courseRef = ref(database, `courses/${courseID}`);

    // Update course data in Firebase
    set(courseRef, updatedCourseData)
      .then(() => {
        alert("Course updated successfully!");
        // Navigate to the AdminCourseList after updating
        navigate("/admincourselist");
      })
      .catch((error) => {
        console.error("Error updating course data: ", error);
      });
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div>
          <Link to="/admincourselist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="text-center">Edit Course</h4>
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
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Description</label>
              <textarea
                className="form-control"
                placeholder="Enter Course Description"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
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
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">End Date</label>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
}

export default EditCourseForm;
