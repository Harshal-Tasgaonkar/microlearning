import React, { useState, useEffect } from "react";
import { ref, onValue, database, remove } from "../firebase"; // Import Firebase reference and onValue function
import { Link } from "react-router-dom";

const TeacherList = () => {
  // State to store teacher data
  const [teachers, setTeachers] = useState([]);

  // Fetch teacher data from Firebase on component mount
  useEffect(() => {
    const teachersRef = ref(database, "teachers"); // Reference to the teachers node in the database
    onValue(teachersRef, (snapshot) => {
      const teachersData = snapshot.val();
      if (teachersData) {
        const formattedTeachers = Object.keys(teachersData).map((key) => ({
          teacherID: key,
          ...teachersData[key],
        }));

        // Sort teachers by createdAt in descending order (most recent first)
        const sortedTeachers = formattedTeachers.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setTeachers(sortedTeachers); // Store sorted teachers in state
      }
    });
  }, []);

  // Handle delete action
  const handleDelete = (teacherID) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      const teacherRef = ref(database, `teachers/${teacherID}`); // Reference to the specific teacher
      remove(teacherRef)
        .then(() => {
          alert("Teacher deleted successfully.");
        })
        .catch((error) => {
          console.error("Error deleting teacher:", error);
        });
    }
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div className="row mb-3">
          <div className="col-12 d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-2 mb-sm-0">Teachers</h1>
            <Link to="/createteacher" className="btn btn-sm btn-primary mb-0">
              Create Teacher
            </Link>
          </div>
        </div>

        {/* Course boxes START */}
        <div className="row g-4 mb-4">
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
              <h6>Total Courses</h6>
              <h2 className="mb-0 fs-1 text-primary">1200</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
              <h6>Activated Courses</h6>
              <h2 className="mb-0 fs-1 text-success">996</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-warning bg-opacity-15 border border-warning rounded-3">
              <h6>Pending Courses</h6>
              <h2 className="mb-0 fs-1 text-warning">200</h2>
            </div>
          </div>
        </div>
        {/* Course boxes END */}

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

          <div className="card-body">
            {/* Teacher table START */}
            <div className="table-responsive border-0 rounded-3">
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="border-0">Name</th>
                    <th scope="col" className="border-0">Mobile</th>
                    <th scope="col" className="border-0">Email</th>
                    <th scope="col" className="border-0">Technology</th>
                    <th scope="col" className="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render teacher data dynamically */}
                  {teachers.length > 0 ? (
                    teachers.map((teacher) => (
                      <tr key={teacher.teacherID}>
                        <td>{teacher.name}</td>
                        <td>{teacher.mobile}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.technology}</td>
                        <td>
                          <Link
                            to={`/editteacher/${teacher.teacherID}`}
                            className="btn btn-sm btn-success me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-edit" />
                          </Link>
                          <button
                            className="btn btn-sm btn-danger mb-0 me-1"
                            onClick={() => handleDelete(teacher.teacherID)}
                          >
                            <i className="fas fa-trash-alt" />
                          </button>
                          <Link
                            to={`/teacherview/${teacher.teacherID}`}
                            className="btn btn-sm btn-warning me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-eye" />
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No teachers available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Teacher table END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherList;
