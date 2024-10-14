import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, get, database } from '../firebase'; // Adjust the import path to your Firebase config

const AdminCategoryView = () => {
  const { categoryId } = useParams(); // Get the category ID from URL params
  const [category, setCategory] = useState(null); // State to hold category data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch category data from Firebase when component mounts
  useEffect(() => {
    const categoryRef = ref(database, `categories/${categoryId}`); // Reference to the specific category in Firebase

    get(categoryRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const categoryData = snapshot.val();
          setCategory(categoryData); // Set the category data to state
        } else {
          console.error('No category found');
        }
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes
      });
  }, [categoryId]); // Dependency array includes `categoryId` to re-fetch when it changes

  // Show loading indicator while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        {/* Title */}
        <div className="row mb-3">
          <div className="col-12 mb-3 d-sm-flex justify-content-between align-items-center">
          <Link to="/admincategorylist" className="btn btn-sm btn-primary mb-0">
              Back
            </Link>
            <h1 className="h3 mb-2 mb-sm-0 mx-auto text-center">Category Detail</h1>
           
          </div>
        </div>
        <div className="row g-4">
          {/* Category information START */}
          <div className="col-xxl-12">
            <div className="card bg-transparent border rounded-3 h-100">
              {/* Card header */}
              <div className="card-header bg-light border-bottom"></div>
              {/* Card body START */}
              <div className="card-body">
                {/* Check if category data is available */}
                {category ? (
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">

                        <li className="list-group-item">
                          <div className='d-flex flex-column'>
                          <span className="h6 mb-0">{category.categoryName}</span> {/* Display category name */}
                          <span>Name</span>
                          </div>
                          
                          
                        </li>

                        {/* Add more fields as needed */}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>No category data available</div>
                )}
              </div>
              {/* Card body END */}
            </div>
          </div>
          {/* Category information END */}
        </div>{" "}
        {/* Row END */}
      </div>
      {/* Page main content END */}
    </div>
  );
};

export default AdminCategoryView;
