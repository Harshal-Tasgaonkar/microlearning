import React, { useEffect, useState } from 'react';
import { database, ref, onValue, remove } from '../firebase'; // Import Firebase functions

const AdminInquiryListBody = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // Reference to the 'inquiries' node in Firebase Realtime Database
    const inquiriesRef = ref(database, 'inquiries');

    // Listen for real-time updates
    onValue(inquiriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert data object to an array of inquiry objects
        const inquiryList = Object.keys(data).map((inquiryId) => ({
          inquiryId,
          ...data[inquiryId],
        }));
        setInquiries(inquiryList);
      }
    });
  }, []);

  // Function to handle deleting an inquiry
  const handleDelete = (inquiryId) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      // Reference to the specific inquiry in Firebase
      const inquiryRef = ref(database, `inquiries/${inquiryId}`);
      // Remove the inquiry from Firebase
      remove(inquiryRef)
        .then(() => {
          alert('Inquiry deleted successfully.');
        })
        .catch((error) => {
          console.error('Error deleting inquiry:', error);
        });
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="page-content-wrapper border">
          {/* Title */}
          <div className="row mb-3">
            <div className="col-12 d-sm-flex justify-content-between align-items-center">
              <h1 className="h3 mb-2 mb-sm-0">Inquiries</h1>
            </div>
          </div>

          {/* Card START */}
          <div className="card bg-transparent border">
            {/* Card header START */}
            <div className="card-header bg-light border-bottom">
              {/* Search and select START */}
              <div className="row g-3 align-items-center justify-content-between">
                {/* Search bar */}
                <div className="col-md-8">
                  <form className="rounded position-relative" onSubmit={(e) => e.preventDefault()}>
                    <input
                      className="form-control bg-body"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                      type="submit"
                    >
                      <i className="fas fa-search fs-6"></i>
                    </button>
                  </form>
                </div>

                {/* Select option for sorting */}
                <div className="col-md-3">
                  <form>
                    <select className="form-select js-choice border-0 z-index-9" aria-label="Sort by">
                      <option value="">Sort by</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
                  </form>
                </div>
              </div>
              {/* Search and select END */}
            </div>
            {/* Card header END */}

            {/* Card body START */}
            <div className="card-body">
              {/* Inquiry table START */}
              <div className="table-responsive border-0 rounded-3">
                {/* Table START */}
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0">Name</th>
                      <th scope="col" className="border-0">Email</th>
                      <th scope="col" className="border-0">Mobile Number</th>
                      <th scope="col" className="border-0">Selected Class</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.length > 0 ? (
                      inquiries.map((inquiry) => (
                        <tr key={inquiry.inquiryId}>
                          <td>{inquiry.name}</td>
                          <td>{inquiry.email}</td>
                          <td>{inquiry.mobileNumber}</td>
                          <td>{inquiry.selectedClass}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-danger mb-0 me-1"
                              onClick={() => handleDelete(inquiry.inquiryId)}
                            >
                              <i className="fas fa-trash-alt" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">No inquiries found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {/* Table END */}
              </div>
              {/* Inquiry table END */}
            </div>
          </div>
          {/* Card END */}
        </div>
      </div>
    </>
  );
};

export default AdminInquiryListBody;
