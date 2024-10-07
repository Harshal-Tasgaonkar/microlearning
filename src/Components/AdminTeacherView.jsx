import React, { useState, useEffect } from "react";
import { ref, onValue,database } from "../firebase"; // Firebase functions
import { useParams,Link } from "react-router-dom"; 

const AdminTeacherView = () => {

  const { teacherID } = useParams(); // Extract teacherID from URL
  const [teacherData, setTeacherData] = useState(null); // State to store teacher details

  // Fetch teacher data from Firebase when component mounts
  useEffect(() => {
    const teacherRef = ref(database, `teachers/${teacherID}`); // Reference to teacher by ID
    onValue(teacherRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTeacherData(data); // Set the fetched teacher data
      }
    });
  }, [teacherID]);

  if (!teacherData) {
    return <div>Loading...</div>; // Show loading while data is being fetched
  }

  return (
    
    <div className="page-content">
    {/* Top bar START */}
   
    {/* Top bar END */}
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12 mb-3 d-sm-flex justify-content-between align-items-center">
          <h1 className="h3 mb-2 mb-sm-0">Teacher detail</h1>
          <Link
            to="/adminteacherlist"
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
            <h4>Teacher Information</h4>
          </div>
          {/* Card body START */}
          <div className="card-body">
            {/* Information START */}
            <div className="row">
              {/* Information item */}
              <div className="col-md-6">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item">
                    <span>Name:</span>
                    <span className="h6 mb-0">{teacherData.name}</span>
                  </li>
                  <li className="list-group-item">
                    <span>Mobile Number:</span>
                    <span className="h6 mb-0">{teacherData.mobile}</span>
                  </li>
                </ul>
              </div>
              {/* Information item */}
              <div className="col-md-6">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item">
                    <span>Email ID:</span>
                    <span className="h6 mb-0">{teacherData.email}</span>
                  </li>
                  <li className="list-group-item">
                    <span>Technology:</span>
                    <span className="h6 mb-0">{teacherData.technology}</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Information END */}
          </div>
          {/* Card body END */}
        </div>
      </div>
      {/* Personal information END */}
    </div>
      {/* Row END */}
    </div>
    {/* Page main content END */}
  </div>
  

  )
}

export default AdminTeacherView