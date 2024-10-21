import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ref, get, remove, database } from '../firebase'; // Adjust the import path to your Firebase config

const AdminSkillListBody = () => {
  const [skills, setSkills] = useState([]); // State to store the list of skills
  const [loading, setLoading] = useState(true); // Loading state
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Fetch skills from Firebase on component mount
  useEffect(() => {
    const skillsRef = ref(database, 'skills'); // Reference to the 'skills' node in Firebase

    get(skillsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const skillsData = snapshot.val();
          const skillsList = Object.keys(skillsData).map((key) => ({
            id: key,
            ...skillsData[key],
          }));
          setSkills(skillsList); // Set the retrieved data to state
        } else {
          console.error('No skills found');
        }
      })
      .catch((error) => {
        console.error('Error fetching skills:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes
      });
  }, []);

  // Handle delete skill from Firebase
  const handleDelete = (id) => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this skill?");
  
    if (confirmDelete) {
      const skillRef = ref(database, `skills/${id}`);
      remove(skillRef)
        .then(() => {
          setSkills((skills) => skills.filter((skill) => skill.id !== id)); // Update state after deletion
          alert('Skill deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting skill:', error);
        });
    } else {
      // If the user cancels the deletion
      console.log("Skill deletion canceled");
    }
  };
  

  // Filter skills based on search term
  const filteredSkills = skills.filter(skill => 
    skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">

        {/* Title */}
        <div className="row mb-3">
          <div className="col-12 d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-2 mb-sm-0">Skills</h1>
            <Link to="/adminskill" className="btn btn-sm btn-primary mb-0">
              Create Skill
            </Link>
          </div>
        </div>

        {/* Card START */}
        <div className="card bg-transparent border">
          <div className="card-header bg-light border-bottom">
            {/* Search and filter options */}
            <div className="row g-3 align-items-center justify-content-between">
              {/* Add search input or other filter options here if needed */}
            </div>
          </div>

          <div className="card-body">
            {/* Skills table START */}
            <div className="table-responsive border-0 rounded-3">
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0 text-start">Name</th> {/* Align Name header to the left */}
                    <th scope="col" className="border-0 text-end rounded-end">Action</th> {/* Align Action header to the right */}
                  </tr>
                </thead>
                <tbody>
                  {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill) => (
                      <tr key={skill.id}>
                        <td>{skill.skillName}</td>
                        <td className="text-end"> {/* Right-align icons */}
                          <Link 
                            to={`/skillview/${skill.id}`} 
                            className="btn btn-sm btn-primary me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-eye" />
                          </Link>
                          <Link
                            to={`/editskill/${skill.id}`} // Ensure the correct ID is passed in the URL
                            className="btn btn-sm btn-warning me-1 mb-1 mb-md-0"
                          >
                            <i className="fas fa-edit" />
                            {console.log('Editing skill ID:', skill.id)}
                          </Link>
                          <button
                            className="btn btn-sm btn-danger mb-0 me-1"
                            onClick={() => handleDelete(skill.id)}
                          >
                            <i className="fas fa-trash-alt" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="text-center">No skills found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Skills table END */}
          </div>
        </div>
        {/* Card END */}
      </div>
    </div>
  );
};

export default AdminSkillListBody;
