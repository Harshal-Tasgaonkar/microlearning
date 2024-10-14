import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ref, get, update, database } from '../firebase'; // Adjust the import path to your Firebase config

const EditSKillForm = () => {
  const { id } = useParams(); // Get the skill ID from URL params
  const [skillName, setSkillName] = useState(''); // State to hold skill name
  const navigate = useNavigate(); // For navigation after update

  // Function to convert a string to title case
  const toTitleCase = (str) => {
    return str
      .toLowerCase() // Convert to lowercase
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join words back together
  };

  useEffect(() => {
    const skillRef = ref(database, `skills/${id}`); // Use a known valid skill ID
    get(skillRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const skillData = snapshot.val();
          console.log('Fetched skill data:', skillData);
          setSkillName(skillData.skillName); // Set the fetched skill name
        } else {
          console.error('No skill found');
        }
      })
      .catch((error) => {
        console.error('Error fetching skill data:', error);
      });
  }, [id]);

  // Handle form submission (update skill in Firebase)
  const handleSubmit = (e) => {
    e.preventDefault();

    const skillRef = ref(database, `skills/${id}`); // Reference to the specific skill

    // Convert skillName to title case before updating
    const updatedSkillName = toTitleCase(skillName);

    update(skillRef, {
      skillName: updatedSkillName, // Update the skill name in Firebase
    })
      .then(() => {
        alert('Skill updated successfully');
        navigate('/adminskilllist'); // Navigate to skill list after update
      })
      .catch((error) => {
        console.error('Error updating skill:', error);
      });
  };

  console.log('Current skill name:', skillName); // Log the current skill name before rendering

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/adminskilllist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="mx-auto">Edit Skill</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Skill Name</label>
              <input
                type="text"
                className="form-control"
                name="skillName"
                value={skillName} // Input value bound to state
                onChange={(e) => setSkillName(e.target.value)} // Update state on input change
                placeholder="Enter Skill Name"
                required
              />
            </div>
          </div>
          <div className="col-md-3 mt-3 d-flex justify-content-end float-end">
            <button type="submit" className="btn btn-primary w-75">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSKillForm;
