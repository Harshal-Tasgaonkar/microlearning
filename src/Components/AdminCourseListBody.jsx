import React, { useState, useEffect } from "react";
import { ref, onValue, set, database } from "../firebase";
import { Link } from 'react-router-dom';

const AdminCourseListBody = () => {
  // State to store courses data
  const [courses, setCourses] = useState([]);

  // Fetch courses data from Firebase on component mount
  useEffect(() => {
    const coursesRef = ref(database, "courses"); // Reference to the courses node in the database

    // Listen for value changes in the courses node
    onValue(coursesRef, (snapshot) => {
      const coursesData = snapshot.val();
      if (coursesData) {
        const formattedCourses = Object.keys(coursesData).map((key) => ({
          courseID: key,
          ...coursesData[key],
        }));

        // Reverse the order of the courses array
        const reversedCourses = formattedCourses.reverse();

        setCourses(reversedCourses); // Store reversed courses in state
      }
    });
  }, []);

  const handleDelete = (courseID) => {
    const courseRef = ref(database, `courses/${courseID}`);
    set(courseRef, null)
      .then(() => {
        alert("Course deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting course: ", error);
      });
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">

       {/* Course boxes START */}
<div className="row g-4 mb-4">
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
      <h6>Total Courses</h6>
      <h2 className="mb-0 fs-1 text-primary">1200</h2>
    </div>
  </div>
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
      <h6>Activated Courses</h6>
      <h2 className="mb-0 fs-1 text-success">996</h2>
    </div>
  </div>
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-warning bg-opacity-15 border border-warning rounded-3">
      <h6>Pending Courses</h6>
      <h2 className="mb-0 fs-1 text-warning">200</h2>
    </div>
  </div>
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-warning bg-opacity-15 border border-warning rounded-3">
      <h6>Pending Courses</h6>
      <h2 className="mb-0 fs-1 text-warning">200</h2>
    </div>
  </div>
</div>
{/* Course boxes END */}
 
       
        {/* Title */}
        <div className="row mb-3">
          <div className="col-12 d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-2 mb-sm-0">Courses</h1>
            <Link to="/createcourse" className="btn btn-sm btn-primary mb-0">
              Create a Course
            </Link>
          </div>
        </div>

        {/* Card START */}
        <div className="card bg-transparent border">
          {/* Card header START */}
          <div className="card-header bg-light border-bottom">
            {/* Search and select START */}
            <div className="row g-3 align-items-center justify-content-between">
              {/* Search bar */}
              <div className="col-md-8">
                <form className="rounded position-relative">
                  <input className="form-control bg-body" type="search" placeholder="Search" aria-label="Search" />
                  <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i className="fas fa-search fs-6"></i>
                  </button>
                </form>
              </div>

              {/* Select option */}
              <div className="col-md-3">
                {/* Sort by filter */}
                <form>
                  <select className="form-select js-choice border-0 z-index-9" aria-label="Sort by">
                    <option value="">Sort by</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Accepted</option>
                    <option>Rejected</option>
                  </select>
                </form>
              </div>
            </div>
            {/* Search and select END */}
          </div>
          {/* Card header END */}
          {/* Card body START */}
          <div className="card-body">
            {/* Course table START */}
            <div className="table-responsive border-0 rounded-3">
              {/* Table START */}
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0">Name</th>
                    <th scope="col" className="border-0">Duration</th>
                    <th scope="col" className="border-0">Online/Offline</th>
                    <th scope="col" className="border-0">StartDate</th>
                    <th scope="col" className="border-0">EndDate</th>
                    <th scope="col" className="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render course data dynamically */}
                  {courses.length > 0 ? (
                    courses.map((course) => (
                      <tr key={course.courseID}>
                        <td>{course.courseName}</td>
                        <td>{course.courseDuration}</td>
                        <td>{course.courseMode}</td>
                        <td>{course.startDate}</td>
                        <td>{course.endDate}</td>
                        <td>
                        <Link
                            to={`/courseview/${course.courseID}`} // Link to CourseView with courseID
                            className="btn btn-sm btn-primary me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-eye" />
                          </Link>
                          <Link
                            to={`/editcourse/${course.courseID}`}
                            className="btn btn-sm btn-warning me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-edit" />
                          </Link>
                          <button
                            className="btn btn-sm btn-danger mb-0 me-1"
                            onClick={() => handleDelete(course.courseID)}
                          >
                            <i className="fas fa-trash-alt" />
                          </button>
                         
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No courses available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* Table END */}
            </div>
            {/* Course table END */}
          </div>
        </div>
        {/* Card END */}
      </div>
      {/* Page main content END */}
    </div>
  );
};

export default AdminCourseListBody;
