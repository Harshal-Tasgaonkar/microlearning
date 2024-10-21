import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ref, get, child, remove, database } from '../firebase'; // Firebase functions

const AdminBatchesListBody = () => {
  const [batches, setBatches] = useState([]); // State to store batch data
  const [teachers, setTeachers] = useState({}); // State to hold teacher names

  // Fetch batch data and teacher names from Firebase
  useEffect(() => {
    const fetchBatches = async () => {
      const dbRef = ref(database);
      try {
        const batchesSnapshot = await get(child(dbRef, 'batches')); // Fetch batches data
        if (batchesSnapshot.exists()) {
          const batchesData = batchesSnapshot.val();
          const batchArray = Object.entries(batchesData).map(([batchID, batch]) => ({
            batchID,
            ...batch,
          }));
          setBatches(batchArray.reverse()); // Reverse the array to show the most recent batch first

          // Fetch teacher names
          const teacherIDs = batchArray.map(batch => batch.teacher);
          const uniqueTeacherIDs = [...new Set(teacherIDs)]; // Get unique teacher IDs
          const teacherPromises = uniqueTeacherIDs.map(async (teacherID) => {
            const teacherSnapshot = await get(child(dbRef, `teachers/${teacherID}`));
            return teacherSnapshot.exists() ? { id: teacherID, name: teacherSnapshot.val().name } : null;
          });

          const teacherResults = await Promise.all(teacherPromises);
          const teachersMap = teacherResults.reduce((acc, teacher) => {
            if (teacher) {
              acc[teacher.id] = teacher.name; // Map teacher IDs to names
            }
            return acc;
          }, {});

          setTeachers(teachersMap); // Store the teacher names in state
        } else {
          console.log('No batches found');
        }
      } catch (error) {
        console.error('Error fetching batches:', error);
      }
    };

    fetchBatches();
  }, []);

  // Delete batch from Firebase
  const handleDelete = async (batchID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this batch?");
    if (confirmDelete) {
      try {
        await remove(ref(database, `batches/${batchID}`)); // Delete the batch from Firebase
        setBatches(batches.filter((batch) => batch.batchID !== batchID)); // Update state to remove the batch locally
        alert("Batch deleted successfully!");
      } catch (error) {
        console.error('Error deleting batch:', error);
        alert("Failed to delete batch. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="page-content-wrapper border">
          <div className="row mb-3">
            <div className="col-12 d-sm-flex justify-content-between align-items-center">
              <h1 className="h3 mb-2 mb-sm-0">Batches</h1>
              <Link to="/createbatch" className="btn btn-sm btn-primary mb-0">
                Create Batch
              </Link>
            </div>
          </div>

          <div className="card bg-transparent border">
            {/* Card header START */}
            <div className="card-header bg-light border-bottom">
              <div className="row g-3 align-items-center justify-content-between">
                {/* Search and select section can go here */}
              </div>
            </div>
            {/* Card header END */}

            <div className="card-body">
              {/* Batch table START */}
              <div className="table-responsive border-0 rounded-3">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0">Technology</th>
                      <th scope="col" className="border-0">Teacher</th>
                      <th scope="col" className="border-0">Number Of Students</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batches.length > 0 ? (
                      batches.map((batch) => (
                        <tr key={batch.batchID}>
                          <td>{batch.technology}</td>
                          <td>{teachers[batch.teacher] || 'Unknown Teacher'}</td> {/* Display teacher name */}
                          <td>{batch.numberOfStudents}</td>
                          <td>
                            <Link
                              to={`/viewbatch/${batch.batchID}`}
                              className="btn btn-sm btn-primary me-1 mb-1 mb-md-0"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to={`/editbatch/${batch.batchID}`}
                              className="btn btn-sm btn-warning me-1 mb-1 mb-md-0"
                            >
                              <i className="fas fa-edit" />
                            </Link>
                            <button
                              className="btn btn-sm btn-danger mb-0 me-1"
                              onClick={() => handleDelete(batch.batchID)}
                            >
                              <i className="fas fa-trash-alt" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No batches found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Batch table END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBatchesListBody;
