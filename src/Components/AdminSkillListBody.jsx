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
    const skillRef = ref(database, `skills/${id}`);
    remove(skillRef)
      .then(() => {
        setSkills(skills.filter((skill) => skill.id !== id)); // Update state after deletion
        alert('Skill deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting skill:', error);
      });
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
              <div className="col-md-8">
                <form className="rounded position-relative" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    className="form-control bg-body" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                  />
                  <button 
                    className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" 
                    type="submit"
                  >
                    <i className="fas fa-search fs-6"></i>
                  </button>
                </form>
              </div>
              <div className="col-md-3">
                <select className="form-select js-choice border-0 z-index-9" aria-label="Sort by">
                  <option value="">Sort by</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card-body">
            {/* Skills table START */}
            <div className="table-responsive border-0 rounded-3">
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0">Name</th>
                    <th scope="col" className="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill) => (
                      <tr key={skill.id}>
                        <td>{skill.skillName}</td>
                        <td>
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
                         {/* Log the ID being passed */}
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
