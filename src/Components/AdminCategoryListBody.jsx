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
                      <th scope="col" className="border-0 text-end rounded-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((category) => (
                        <tr key={category.id}>
                          <td>{category.categoryName}</td>
                          <td className="text-end">
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
