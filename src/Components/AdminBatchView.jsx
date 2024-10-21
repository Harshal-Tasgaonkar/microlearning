import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // useParams for getting batchID
import { ref, get, child, database } from '../firebase'; // For Firebase operations

const AdminBatchView = () => {
  const { batchID } = useParams(); // Get batchID from URL parameters
  const [batchData, setBatchData] = useState(null); // State to hold batch data
  const [teacherName, setTeacherName] = useState(''); // State to hold teacher's name
  const [skillNames, setSkillNames] = useState([]); // State to hold skill names

  // Fetch batch data from Firebase when the component mounts
  useEffect(() => {
    const fetchBatchData = async () => {
      const dbRef = ref(database);
      try {
        const batchSnapshot = await get(child(dbRef, `batches/${batchID}`));
        if (batchSnapshot.exists()) {
          const data = batchSnapshot.val();
          setBatchData(data); // Set fetched batch data

          // Fetch teacher name
          const teacherSnapshot = await get(child(dbRef, `teachers/${data.teacher}`));
          if (teacherSnapshot.exists()) {
            setTeacherName(teacherSnapshot.val().name); // Assuming the name field is in the teacher object
          }

          // Fetch skill names
          if (data.skills && Array.isArray(data.skills) && data.skills.length > 0) {
            const skillPromises = data.skills.map(async (skillsID) => {
              const skillSnapshot = await get(child(dbRef, `skills/${skillsID}`));
              return skillSnapshot.exists() ? skillSnapshot.val().skillName
              : null; // Assuming the name field is in the skill object
            });

            const skillResults = await Promise.all(skillPromises);
            setSkillNames(skillResults.filter(Boolean)); // Filter out null values
          } else {
            console.log("No skills found for this batch.");
          }
        } else {
          console.error('No data available for this batch');
        }
      } catch (error) {
        console.error('Error fetching batch data:', error);
      }
    };

    fetchBatchData();
  }, [batchID]);

  if (!batchData) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  return (
    <>
      <div className="page-content">
        {/* Page main content START */}
        <div className="page-content-wrapper border">
          {/* Title */}
          <div className="row mb-3">
            <div className="col-12 d-sm-flex justify-content-between align-items-center">
              <Link to="/adminbatcheslist" className="btn btn-sm btn-primary mb-0">
                Back
              </Link>
              <h1 className="h3 mb-2 mb-sm-0 mx-auto text-center">Batch Details</h1>
            </div>
          </div>

          <div className="row g-4">
            {/* Batch information START */}
            <div className="col-xxl-12">
              <div className="card bg-transparent border rounded-3 h-100">
                <div className="card-header bg-light border-bottom"></div>
                <div className="card-body">
                  <div className="row mt-3">
                    {/* Information item */}
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{batchData.technology}</span>
                            <span>Technology</span>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{teacherName}</span>
                            <span>Teacher</span>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{batchData.numberOfStudents}</span>
                            <span>Number Of Students</span>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{skillNames.length > 0 ? skillNames.join(', ') : 'No skills found'}</span>
                            <span>Skills</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Information item */}
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{batchData.startDate}</span>
                            <span>Start Date</span>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{batchData.endDate}</span>
                            <span>End Date</span>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{batchData.startTime}</span>
                            <span>Start Time</span>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                            <span className="h6 mb-0">{batchData.endTime}</span>
                            <span>End Time</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Batch information END */}
          </div>
        </div>
        {/* Page main content END */}
      </div>
    </>
  );
};

export default AdminBatchView;
