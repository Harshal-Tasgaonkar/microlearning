import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, get, update, database } from '../firebase'; // Firebase imports

const EditCategoryForm = () => {
  const { categoryId } = useParams(); // Get the categoryId from the route parameters
  const [categoryName, setCategoryName] = useState(''); // State to hold the category name

  // Function to convert a string to title case
  const toTitleCase = (str) => {
    return str
      .toLowerCase() // Convert to lowercase
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join words back together
  };

  // Fetch category data from Firebase
  useEffect(() => {
    const categoryRef = ref(database, `categories/${categoryId}`);
    get(categoryRef).then((snapshot) => {
      if (snapshot.exists()) {
        const categoryData = snapshot.val();
        setCategoryName(categoryData.categoryName); // Set category name to state
      } else {
        console.error('Category not found');
      }
    });
  }, [categoryId]);

  // Handle form submission and update category in Firebase
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the category name field is empty
    if (!categoryName.trim()) {
      alert('Please enter a category name.'); // Alert for empty category name
      return; // Stop form submission
    }

    const categoryRef = ref(database, `categories/${categoryId}`);

    // Convert categoryName to title case before updating
    const updatedCategoryName = toTitleCase(categoryName);

    update(categoryRef, { categoryName: updatedCategoryName })
      .then(() => {
        alert('Category updated successfully');
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/admincategorylist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="mx-auto">Edit Category</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                name="categoryName"
                className="form-control"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required // Make this field mandatory
              />
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

export default EditCategoryForm;
