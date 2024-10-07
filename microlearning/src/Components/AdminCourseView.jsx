import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get courseID from the URL
import { ref, get,database } from "../firebase"; // Import Firebase functions

import { Link } from 'react-router-dom'

const AdminCourseView = () => {

  const { courseID } = useParams(); // Get courseID from the route parameter
  const [course, setCourse] = useState(null);

  // Fetch course data from Firebase
  useEffect(() => {
    const courseRef = ref(database, `courses/${courseID}`);
    get(courseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCourse(snapshot.val()); // Set course data in state
        } else {
          console.log("No data available for the given courseID");
        }
      })
      .catch((error) => {
        console.error("Error fetching course data: ", error);
      });
  }, [courseID]);

  return (
    
    <div className="page-content">
    {/* Top bar START */}
    
    {/* Top bar END */}
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12 d-sm-flex justify-content-between align-items-center">
          <h1 className="h3 mb-2 mb-sm-0">Course Details</h1>
          <Link
            to="/admincourselist"
            className="btn btn-sm btn-primary mb-0"
          >
            Back
          </Link>
        </div>
      </div>
       <div className="row g-4">
      {/* Course information START */}
      <div className="col-xxl-12">
        <div className="card bg-transparent border rounded-3 h-100">
          <div className="card-header bg-light border-bottom"></div>
          <div className="card-body">
            {course ? (
              <div className="row mt-3">
                {/* Information item */}
                <div className="col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <span>Course Name:</span>
                      <span className="h6 mb-0">{course.courseName}</span>
                    </li>
                    <li className="list-group-item">
                      <span>Description:</span>
                      <span className="h6 mb-0">{course.courseDescription}</span>
                    </li>
                    <li className="list-group-item">
                      <span>Duration:</span>
                      <span className="h6 mb-0">{course.courseDuration}</span>
                    </li>
                    <li className="list-group-item">
                      <span>Course Mode:</span>
                      <span className="h6 mb-0">{course.courseMode}</span>
                    </li>
                  </ul>
                </div>
                {/* Information item */}
                <div className="col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <span>Start Date:</span>
                      <span className="h6 mb-0">{course.startDate}</span>
                    </li>
                    <li className="list-group-item">
                      <span>End Date:</span>
                      <span className="h6 mb-0">{course.endDate}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <p>Loading course data...</p>
            )}
          </div>
        </div>
      </div>
      {/* Course information END */}
    </div>
      {/* Row END */}
    </div>
    {/* Page main content END */}
  </div>
  

  )
}

export default AdminCourseView