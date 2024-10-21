import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { ref, set, get, child, database } from '../firebase';
import { v4 as uuidv4 } from 'uuid'; // To generate a unique batch ID

const CreateBatchForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [teachers, setTeachers] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [batchData, setBatchData] = useState({
    technology: '',
    teacher: '',
    numberOfStudents: '',
    startTime: '',
    endTime: '',
    startDate: '',
    endDate: '',
    skills: [],
  });

  // Fetch teachers and skills data from Firebase
  useEffect(() => {
    const fetchTeachersAndSkills = async () => {
      const dbRef = ref(database);

      try {
        // Fetch teachers
        const teachersSnapshot = await get(child(dbRef, 'teachers'));
        if (teachersSnapshot.exists()) {
          setTeachers(teachersSnapshot.val());
        }

        // Fetch skills
        const skillsSnapshot = await get(child(dbRef, 'skills'));
        if (skillsSnapshot.exists()) {
          setSkills(skillsSnapshot.val());
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchTeachersAndSkills();
  }, []);

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBatchData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle skill checkbox change
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSkills([...selectedSkills, value]);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== value));
    }
  };

  // Format date to 'dd MMM yyyy'
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  // Convert technology to title case
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare batch data
    const batchID = uuidv4();
    const formattedBatchData = {
      ...batchData,
      technology: toTitleCase(batchData.technology),
      startDate: formatDate(batchData.startDate),
      endDate: formatDate(batchData.endDate),
      skills: selectedSkills, // Store selected skill IDs
    };

    // Send data to Firebase
    try {
      await set(ref(database, `batches/${batchID}`), formattedBatchData);
      alert('Batch created successfully!');
      navigate('/adminbatcheslist'); // Navigate to the batch list after successful submission
    } catch (error) {
      console.error('Error saving batch to Firebase:', error);
    }
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/adminbatcheslist" className="btn btn-dark">Back</Link>
          <h4 className="mx-auto">Create Batch</h4>
        </div>

        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Technology</label>
              <input
                type="text"
                className="form-control"
                name="technology"
                placeholder="Enter Technology"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Teacher</label>
              <select
                className="form-control"
                name="teacher"
                onChange={handleInputChange}
                required
              >
                <option value="">Select Teacher</option>
                {teachers && Object.entries(teachers).map(([teacherID, teacher]) => (
                  <option key={teacherID} value={teacherID}> {/* Store teacher ID */}
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Number Of Students</label>
              <input
                type="number"
                className="form-control"
                name="numberOfStudents"
                placeholder="Enter Number Of Students"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Start Time</label>
              <input
                type="time"
                className="form-control"
                name="startTime"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">End Time</label>
              <input
                type="time"
                className="form-control"
                name="endTime"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">End Date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Skills</label>
              {skills && Object.entries(skills).map(([skillID, skill]) => (
                <div key={skillID} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={skillID} // Store skill ID
                    id={`skill-${skillID}`}
                    onChange={handleSkillChange}
                  />
                  <label className="form-check-label" htmlFor={`skill-${skillID}`}>
                    {skill.skillName}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3 mt-3 d-flex justify-content-end float-end">
            <button type="submit" className="btn btn-primary w-75">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBatchForm;
