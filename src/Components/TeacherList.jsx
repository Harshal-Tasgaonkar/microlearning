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

       

        <div className="card bg-transparent border">

         {/* Card header START */}
         <div className="card-header bg-light border-bottom">
            {/* Search and select START */}
            <div className="row g-3 align-items-center justify-content-between">
              

              
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
                            to={`/teacherview/${teacher.teacherID}`}
                            className="btn btn-sm btn-primary me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-eye" />
                          </Link>
                          <Link
                            to={`/editteacher/${teacher.teacherID}`}
                            className="btn btn-sm btn-warning me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-edit" />
                          </Link>
                          <button
                            className="btn btn-sm btn-danger mb-0 me-1"
                            onClick={() => handleDelete(teacher.teacherID)}
                          >
                            <i className="fas fa-trash-alt" />
                          </button>
                          
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
