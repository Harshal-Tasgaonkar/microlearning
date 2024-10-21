import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // useNavigate and useParams for navigation and getting batchID
import { ref, get, update, child, database } from '../firebase'; // For Firebase operations

const EditBatchForm = () => {
  const { batchID } = useParams(); // Get batchID from URL parameters
  const navigate = useNavigate(); // Initialize navigation

  // State to store batch data
  const [batchData, setBatchData] = useState({
    technology: '',
    teacher: '',
    numberOfStudents: '',
    startTime: '',
    endTime: '',
    startDate: '', // Initially empty
    endDate: '', // Initially empty
    skills: [], // Change this to an array to hold skill IDs
  });

  const [teachers, setTeachers] = useState([]); // State to hold teachers
  const [skills, setSkills] = useState([]); // State to hold skills
  const [selectedSkills, setSelectedSkills] = useState([]); // State to hold selected skill IDs

  // Fetch batch data, teachers, and skills from Firebase when component mounts
  useEffect(() => {
    const fetchBatchData = async () => {
      const dbRef = ref(database);
      try {
        // Fetch batch data
        const batchSnapshot = await get(child(dbRef, `batches/${batchID}`));
        if (batchSnapshot.exists()) {
          const data = batchSnapshot.val();
          setBatchData({
            technology: data.technology || '',
            teacher: data.teacher || '',
            numberOfStudents: data.numberOfStudents || '',
            startTime: data.startTime || '',
            endTime: data.endTime || '',
            startDate: convertToDateInputFormat(data.startDate), // Convert to 'mm/dd/yyyy'
            endDate: convertToDateInputFormat(data.endDate), // Convert to 'mm/dd/yyyy'
            skills: data.skills || [], // Initialize skills
          });
          setSelectedSkills(data.skills || []); // Set selected skills from the batch data
        } else {
          console.error('No data available for this batch');
        }

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

    fetchBatchData();
  }, [batchID]);

  // Function to convert "DD MMM YYYY" to "YYYY-MM-DD"
  const convertToDateInputFormat = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    const monthNumber = new Date(Date.parse(month + " 1, 2021")).getMonth() + 1; // Convert month name to number
    return `${year}-${String(monthNumber).padStart(2, '0')}-${String(day).padStart(2, '0')}`; // Return in "YYYY-MM-DD" format
  };

  // Function to format date from 'mm/dd/yyyy' to 'dd MMM yyyy'
  const formatDateToSend = (date) => {
    if (!date) return ''; // Return empty string if date is undefined
    const [month, day, year] = date.split('/'); // Split the date
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return `${day} ${months[parseInt(month) - 1]} ${year}`; // Format and return
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBatchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  // Handle form submission and update Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for sending to Firebase
    const formattedBatchData = {
      ...batchData,
      startDate: formatDateToSend(batchData.startDate), // Format date before sending
      endDate: formatDateToSend(batchData.endDate), // Format date before sending
      skills: selectedSkills, // Store selected skill IDs
    };

    try {
      await update(ref(database, `batches/${batchID}`), formattedBatchData); // Update the batch data in Firebase
      alert('Batch updated successfully!');
      navigate('/adminbatcheslist'); // Navigate to batch list after update
    } catch (error) {
      console.error('Error updating batch:', error);
    }
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/adminbatcheslist" className="btn btn-dark">Back</Link>
          <h4 className="mx-auto">Edit Batch</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Technology</label>
              <input
                type="text"
                className="form-control"
                name="technology"
                value={batchData.technology}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Teacher</label>
              <select
                className="form-control"
                name="teacher"
                value={batchData.teacher} // Set the selected teacher ID
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
                value={batchData.numberOfStudents}
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
                value={batchData.startTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className='row'>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">End Time</label>
              <input
                type="time"
                className="form-control"
                name="endTime"
                value={batchData.endTime}
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
                value={batchData.startDate} // Already in 'mm/dd/yyyy' format
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
                value={batchData.endDate} // Already in 'mm/dd/yyyy' format
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
                    checked={selectedSkills.includes(skillID)} // Check if skill is selected
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
            <button type="submit" className="btn btn-primary w-75">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBatchForm;
