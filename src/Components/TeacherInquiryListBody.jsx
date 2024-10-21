import React, { useEffect, useState } from 'react';
import { ref, onValue, remove,database } from '../firebase';


const TeacherInquiryListBody = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reference to the 'teacherinquiry' data in Firebase
    const inquiriesRef = ref(database, 'teacherinquiry');

    // Fetch the data in real-time
    onValue(inquiriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setInquiries(formattedData);
      } else {
        setInquiries([]); // If no data, set to empty array
      }
      setLoading(false); // Stop loading
    });
  }, []);

  // Delete a specific inquiry
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this inquiry?");
    if (confirmDelete) {
      const inquiryRef = ref(database, `teacherinquiry/${id}`);
      remove(inquiryRef)
        .then(() => {
          alert('Inquiry deleted successfully');
        })
        .catch((error) => {
          console.error("Error deleting inquiry: ", error);
        });
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="page-content-wrapper border">
          <div className="row mb-3">
            <div className="col-12 d-sm-flex justify-content-between align-items-center">
              <h1 className="h3 mb-2 mb-sm-0">Teacher Inquiry</h1>
            </div>
          </div>

          <div className="card bg-transparent border">
            {/* Card header START */}
            <div className="card-header bg-light border-bottom">
              <div className="row g-3 align-items-center justify-content-between">
                {/* Add search or filter if needed */}
              </div>
            </div>
            {/* Card header END */}

            <div className="card-body">
              {/* Teacher table START */}
              <div className="table-responsive border-0 rounded-3">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0">Name</th>
                      <th scope="col" className="border-0">Email</th>
                      <th scope="col" className="border-0">Mobile</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="4" className="text-center">Loading...</td>
                      </tr>
                    ) : (
                      inquiries.length > 0 ? (
                        inquiries.map((inquiry) => (
                          <tr key={inquiry.id}>
                            <td>{inquiry.name}</td>
                            <td>{inquiry.email}</td>
                            <td>{inquiry.phone}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-danger mb-0 me-1"
                                onClick={() => handleDelete(inquiry.id)}
                              >
                                <i className="fas fa-trash-alt" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">No inquiries found</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              {/* Teacher table END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherInquiryListBody;
