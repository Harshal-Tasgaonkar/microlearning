import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ref, get, remove, database } from '../firebase'; // Firebase imports

const AdminCategoryListBody = () => {
  const [categories, setCategories] = useState([]); // State to store fetched categories
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Fetch categories from Firebase on component mount
  useEffect(() => {
    const categoriesRef = ref(database, 'categories'); // Reference to the categories node in Firebase

    get(categoriesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const categoriesData = snapshot.val();
        const categoriesList = Object.keys(categoriesData).map((key) => ({
          id: key,
          ...categoriesData[key],
        }));
        setCategories(categoriesList); // Set fetched categories to state
      }
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to handle category deletion
  const handleDelete = (id) => {
    const categoryRef = ref(database, `categories/${id}`); // Reference to the specific category

    if (window.confirm('Are you sure you want to delete this category?')) {
      remove(categoryRef).then(() => {
        setCategories(categories.filter((category) => category.id !== id)); // Remove the deleted category from state
        alert('Category deleted successfully');
      });
    }
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="page-content">
        <div className="page-content-wrapper border">

          {/* Course boxes START */}
<div className="row g-4 mb-4">
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
      <h6>Total Courses</h6>
      <h2 className="mb-0 fs-1 text-primary">1200</h2>
    </div>
  </div>
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
      <h6>Activated Courses</h6>
      <h2 className="mb-0 fs-1 text-success">996</h2>
    </div>
  </div>
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-warning bg-opacity-15 border border-warning rounded-3">
      <h6>Pending Courses</h6>
      <h2 className="mb-0 fs-1 text-warning">200</h2>
    </div>
  </div>
  {/* Course item */}
  <div className="col-sm-6 col-lg-3">
    <div className="text-center p-4 bg-warning bg-opacity-15 border border-warning rounded-3">
      <h6>Pending Courses</h6>
      <h2 className="mb-0 fs-1 text-warning">200</h2>
    </div>
  </div>
</div>
{/* Course boxes END */}

          {/* Title */}
          <div className="row mb-3">
            <div className="col-12 d-sm-flex justify-content-between align-items-center">
              <h1 className="h3 mb-2 mb-sm-0">Categories</h1>
              <Link to="/admincategory" className="btn btn-sm btn-primary mb-0">
                Create Category
              </Link>
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
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
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
              {/* Category table START */}
              <div className="table-responsive border-0 rounded-3">
                {/* Table START */}
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0">Name</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((category) => (
                        <tr key={category.id}>
                          <td>{category.categoryName}</td>
                          <td>
                          <Link
                              to={`/categoryview/${category.id}`}
                              className="btn btn-sm btn-primary me-1 mb-1 mb-md-0"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                          <Link to={`/editcategory/${category.id}`} 
                          className="btn btn-sm btn-warning me-1 mb-1 mb-md-0">
                           <i className="fas fa-edit" />
                          </Link>

                            <button
                              className="btn btn-sm btn-danger mb-0 me-1"
                              onClick={() => handleDelete(category.id)}
                            >
                              <i className="fas fa-trash-alt" />
                            </button>
                            
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2">No categories found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {/* Table END */}
              </div>
              {/* Category table END */}
            </div>
          </div>
          {/* Card END */}
        </div>
      </div>
    </>
  );
};

export default AdminCategoryListBody;
