import React, { useState } from 'react';
import { ref, push, database, set } from '../firebase'; // Import Firebase functions
import { Link, useNavigate } from 'react-router-dom'; // React Router hooks

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

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
    e.preventDefault(); // Prevent default form behavior

    // Check if the category name field is empty
    if (!categoryName.trim()) {
      alert('Please enter a category name.'); // Alert for empty category name
      return; // Stop form submission
    }

    // Convert category name to title case
    const formattedCategoryName = toTitleCase(categoryName);

    // Generate new category with a unique ID
    const newCategoryRef = push(ref(database, 'categories')); // Create a new reference for categories
    const categoryID = newCategoryRef.key; // Get the unique ID of the category

    const newCategoryData = {
      categoryID, // Set the categoryID in the data
      categoryName: formattedCategoryName, // Save the title-cased category name
    };

    // Save category data to Firebase
    set(newCategoryRef, newCategoryData)
      .then(() => {
        alert('Category created successfully');
        navigate('/admincategorylist'); // Navigate to AdminCategoryList component
      })
      .catch((error) => {
        console.error('Error saving category:', error);
      });
  };

  return (
    <>
      <div className="page-content">
        <div className="page-content-wrapper border">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/admincategorylist" className="btn btn-dark">
              Back
            </Link>
            <h4 className="mx-auto">Create Category</h4>
          </div>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label fw-bold">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter Category Name"
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

export default CategoryForm;
