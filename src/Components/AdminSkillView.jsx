import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, get, database } from '../firebase'; // Adjust the import path to your Firebase config

const AdminSkillView = () => {
  const { id } = useParams(); // Get skill ID from URL parameters
  const [skill, setSkill] = useState(null); // State to store skill data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const skillRef = ref(database, `skills/${id}`); // Reference to the specific skill in Firebase

    get(skillRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSkill(snapshot.val()); // Set the skill data
        } else {
          console.error('Skill not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching skill:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
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
          <Link to="/adminskilllist" className="btn btn-sm btn-primary mb-0">
              Back
            </Link>
            <h1 className="h3 mb-2 mb-sm-0 mx-auto text-center">Skill detail</h1>
            
          </div>
        </div>
        <div className="row g-4">
          {/* Skill information START */}
          <div className="col-xxl-12">
            <div className="card bg-transparent border rounded-3 h-100">
              {/* Card header */}
              <div className="card-header bg-light border-bottom"></div>
              {/* Card body START */}
              <div className="card-body">
                {/* Check if skill data is available */}
                {skill ? (
                  <>
                    {/* Information START */}
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-group list-group-borderless">
                          <li className="list-group-item">
                            <div className='d-flex flex-column'>
                            <span className="h6 mb-0">{skill.skillName}</span>
                            <span>Name</span>
                            </div>
                           
                            
                          </li>
                          {/* Add more fields as needed */}
                        </ul>
                      </div>
                    </div>
                    {/* Information END */}
                  </>
                ) : (
                  <div>No skill found</div>
                )}
              </div>
              {/* Card body END */}
            </div>
          </div>
          {/* Skill information END */}
        </div>{" "}
        {/* Row END */}
      </div>
      {/* Page main content END */}
    </div>
  );
};

export default AdminSkillView;
