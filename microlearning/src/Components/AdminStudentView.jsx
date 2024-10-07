import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { ref, get,database } from "../firebase";


const AdminStudentView = () => {

  const { studentID } = useParams(); // Get studentID from URL params
  const [student, setStudent] = useState(null); // State to hold student details

  useEffect(() => {
    const studentRef = ref(database, `students/${studentID}`);

    // Fetch student data from Firebase
    get(studentRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setStudent(snapshot.val()); // Set the fetched student data to the state
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [studentID]);


  return (
    
    <div className="page-content">
    {/* Top bar START */}
   
    {/* Top bar END */}
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12 mb-3 d-sm-flex justify-content-between align-items-center">
          <h1 className="h3 mb-2 mb-sm-0">Student detail</h1>
          <Link
            to="/adminstudentlist"
            className="btn btn-sm btn-primary mb-0"
          >
            Back
          </Link>
        </div>
      </div>
      <div className="row g-4">
        {/* Personal information START */}
        <div className="col-xxl-12">
          <div className="card bg-transparent border rounded-3 h-100">
            {/* Card header */}
            <div className="card-header bg-light border-bottom">
            
            </div>
            {/* Card body START */}
            <div className="card-body">
      {/* Check if student data is available */}
      {student ? (
        <>
          {/* Information START */}
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-borderless">
                <li className="list-group-item">
                  <span>Name:</span>
                  <span className="h6 mb-0">{student.name}</span>
                </li>
                <li className="list-group-item">
                  <span>Mobile Number:</span>
                  <span className="h6 mb-0">{student.mobile}</span>
                </li>
                <li className="list-group-item">
                  <span>Email ID:</span>
                  <span className="h6 mb-0">{student.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-borderless">
                <li className="list-group-item">
                  <span>Location:</span>
                  <span className="h6 mb-0">{student.city}</span>
                </li>
                <li className="list-group-item">
                  <span>Passout Year:</span>
                  <span className="h6 mb-0">{student.passoutYear}</span>
                </li>
                <li className="list-group-item">
                  <span>Qualification:</span>
                  <span className="h6 mb-0">{student.qualification}</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Information END */}
        </>
      ) : (
        <p>Loading student information...</p>
      )}
    </div>
            {/* Card body END */}
          </div>
        </div>
        {/* Personal information END */}
      </div>{" "}
      {/* Row END */}
    </div>
    {/* Page main content END */}
  </div>
  

  )
}

export default AdminStudentView