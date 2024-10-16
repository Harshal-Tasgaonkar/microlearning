import React, { useState, useEffect } from "react";
import { ref, onValue, database, remove } from "../firebase"; 
import { Link } from 'react-router-dom';

const AdminStudentListBody = () => {

  const [students, setStudents] = useState([]); // State to hold student data

  useEffect(() => {
    const studentsRef = ref(database, "students"); // Reference to the "students" node in the Firebase DB

    // Fetch student data from Firebase
    onValue(studentsRef, (snapshot) => {
      const studentsData = snapshot.val();
      if (studentsData) {
        const formattedStudents = Object.keys(studentsData).map((key) => ({
          studentID: key,
          ...studentsData[key],
        }));

        // Reverse the array to display the most recently added students first
        setStudents(formattedStudents.reverse());
      }
    });
  }, []);

  // Function to handle the deletion of a student
  const handleDelete = (studentID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      const studentRef = ref(database, `students/${studentID}`); // Reference to the specific student to delete
      remove(studentRef) // Firebase remove function
        .then(() => {
          alert("Student deleted successfully.");
          setStudents((prevStudents) => prevStudents.filter((student) => student.studentID !== studentID));
        })
        .catch((error) => {
          console.error("Error deleting student: ", error);
        });
    }
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">

         

        {/* Title */}
        <div className="row mb-3">
          <div className="col-12 d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-2 mb-sm-0">Students</h1>
            <Link to="/createstudent" className="btn btn-sm btn-primary mb-0">
              Create Student
            </Link>
          </div>
        </div>

       

        {/* Card START */}
        <div className="card bg-transparent border">
          {/* Card body START */}
         {/* Card header START */}
         <div className="card-header bg-light border-bottom">
            {/* Search and select START */}
            <div className="row g-3 align-items-center justify-content-between">
              

              
            </div>
            {/* Search and select END */}
          </div>
          {/* Card header END */}

          <div className="card-body">
            {/* Student table START */}
            <div className="table-responsive border-0 rounded-3">
              {/* Table START */}
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0">Name</th>
                    <th scope="col" className="border-0">Mobile</th>
                    <th scope="col" className="border-0">Email</th>
                    <th scope="col" className="border-0">Passout Year</th>
                    <th scope="col" className="border-0">Latest Qualification</th>
                    <th scope="col" className="border-0">City</th>
                    <th scope="col" className="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render student data dynamically */}
                  {students.length > 0 ? (
                    students.map((student) => (
                      <tr key={student.studentID}>
                        <td>{student.name}</td>
                        <td>{student.mobile}</td>
                        <td>{student.email}</td>
                        <td>{student.passoutYear}</td>
                        <td>{student.qualification}</td>
                        <td>{student.city}</td>
                        <td>
                        <Link
                            to={`/studentview/${student.studentID}`} // Navigate to StudentView with studentID
                            className="btn btn-sm btn-primary me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-eye" />
                          </Link>
                          <Link
                            to={`/editstudent/${student.studentID}`}
                            className="btn btn-sm btn-warning me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-edit" />
                          </Link>
                          <button
                            className="btn btn-sm btn-danger me-1 mb-0"
                            onClick={() => handleDelete(student.studentID)}
                          >
                            <i className="fas fa-trash-alt" />
                          </button>
                          
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center">No students available</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* Table END */}
            </div>
            {/* Student table END */}
          </div>
          {/* Card body END */}
        </div>
        {/* Card END */}
      </div>
    </div>
  );
};

export default AdminStudentListBody;
