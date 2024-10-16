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
        <Link
            to="/adminstudentlist"
            className="btn btn-sm btn-primary mb-0"
          >
            Back
          </Link>
          <h1 className="h3 mb-2 mb-sm-0  mx-auto text-center">Student detail</h1>
          
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
                  <div className="d-flex flex-column">
                  <span className="h6 mb-0">{student.name}</span>
                  <span>Name</span>
                  </div>
                 
                 
                </li>
                <li className="list-group-item">
                <div className="d-flex flex-column">
                <span className="h6 mb-0">{student.mobile}</span>
                <span>Mobile Number</span>
                    </div>
                 
                  
                </li>
                <li className="list-group-item">
                <div className="d-flex flex-column">
                <span className="h6 mb-0">{student.email}</span>
                <span>Email ID</span>
                    </div>
                  
                  
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-borderless">
                <li className="list-group-item">
                <div className="d-flex flex-column">
                <span className="h6 mb-0">{student.city}</span>
                <span>Location</span>
                    </div>
                  
                  
                </li>
                <li className="list-group-item">
                <div className="d-flex flex-column">
                <span className="h6 mb-0">{student.passoutYear}</span>
                <span>Passout Year</span>
                    </div>
                 
                 
                </li>
                <li className="list-group-item">
                <div className="d-flex flex-column">
                <span className="h6 mb-0">{student.qualification}</span>
                <span>Qualification</span>
                    </div>
                 
                 
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