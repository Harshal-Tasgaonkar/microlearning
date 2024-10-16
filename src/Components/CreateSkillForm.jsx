import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ref, push, set, database } from '../firebase'; // Firebase imports

const CreateSkillForm = () => {
  const [skillName, setSkillName] = useState(''); // State to store skill name
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Utility function to convert string to title case
  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the skill name is empty
    if (!skillName.trim()) {
      alert('Please enter a skill name.'); // Alert for empty skill name
      return; // Stop form submission
    }

    // Convert skill name to title case
    const formattedSkillName = toTitleCase(skillName);

    // Create a reference to the 'skills' node in Firebase
    const skillsRef = ref(database, 'skills');

    // Push a new skill into Firebase and create a unique skillId
    const newSkillRef = push(skillsRef);

    // Use 'set' to add the title-cased skillName under the generated skillId
    set(newSkillRef, {
      skillName: formattedSkillName,
    })
      .then(() => {
        alert('Skill created successfully');
        navigate('/adminskilllist'); // Navigate to AdminSkillList after submission
      })
      .catch((error) => {
        console.error('Error creating skill:', error);
      });
  };

  return (
    <>
      <div className="page-content">
        <div className="page-content-wrapper border">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/adminskilllist" className="btn btn-dark">
              Back
            </Link>
            <h4 className="mx-auto">Create Skill</h4>
          </div>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label fw-bold">Skill Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Skill Name"
                  value={skillName}
                  onChange={(e) => setSkillName(e.target.value)} // Update skill name on input change
                  required // Make this field mandatory
                />
              </div>
            </div>

            <div className="col-md-3 mt-3 d-flex justify-content-end float-end">
              <button type="submit" className="btn btn-primary w-75">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSkillForm;
