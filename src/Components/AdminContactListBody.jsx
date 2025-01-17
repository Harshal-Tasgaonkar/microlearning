import React, { useEffect, useState } from 'react';
import { database, ref, onValue, remove } from '../firebase'; // Import necessary Firebase functions

const AdminContactListBody = () => {
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState({}); // State to store category data

  // Fetch category data from Firebase
  useEffect(() => {
    const categoryRef = ref(database, 'categories'); // Assuming 'categories' is the path in your database
    onValue(categoryRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCategories(data); // Store categories in an object where categoryID is the key
      }
    });
  }, []);

  // Fetch contact data from Firebase
  useEffect(() => {
    const contactRef = ref(database, 'contacts'); // Assuming 'contacts' is the path in your database
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const contactList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setContacts(contactList);
      }
    });
  }, []);

  const handleDelete = (contactId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (confirmDelete) {
      const contactRef = ref(database, `contacts/${contactId}`);
      remove(contactRef)
        .then(() => {
          setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== contactId)
          );
          console.log('Contact deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting contact:', error);
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
              <h1 className="h3 mb-2 mb-sm-0">Contacts</h1>
            </div>
          </div>

          {/* Card START */}
          <div className="card bg-transparent border">
            {/* Card header START */}
            <div className="card-header bg-light border-bottom">
              {/* Search and select START */}
              <div className="row g-3 align-items-center justify-content-between">
                {/* Any filters or additional search features can go here */}
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
                      <th scope="col" className="border-0">Mobile</th>
                      <th scope="col" className="border-0">Message</th>
                      <th scope="col" className="border-0">Category</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.length > 0 ? (
                      contacts.map((contact) => (
                        <tr key={contact.id}>
                          <td>{contact.name}</td>
                          <td>{contact.mobile}</td>
                          <td>{contact.message}</td>
                          {/* Display the categoryName based on the categoryID */}
                          <td>{categories[contact.category] ? categories[contact.category].categoryName : 'Unknown Category'}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-danger mb-0 me-1"
                              onClick={() => handleDelete(contact.id)}
                            >
                              <i className="fas fa-trash-alt" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No contacts found
                        </td>
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

export default AdminContactListBody;
