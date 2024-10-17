import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { Link, useLocation } from 'react-router-dom';
import { database } from '../firebase'; // Import the initialized database instance
import course01 from "../Assets/images/courses/4by3/01.jpg";
import png04 from "../Assets/images/pattern/04.png";

const CourseListBody = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Use the useLocation hook to access the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = decodeURIComponent(queryParams.get('category') || "");
  

  // Fetch courses
  useEffect(() => {
    const courseRef = ref(database, 'courses'); // Use the imported database instance

    onValue(courseRef, (snapshot) => {
      const data = snapshot.val();
      const coursesArray = Object.values(data).map(course => ({
        ...course,
        courseID: course.courseID // Ensure you have the courseID in the course object
      })); 
      setCourses(coursesArray);
      setFilteredCourses(coursesArray); // Initially set filtered courses to all courses
    });
  }, []);

  // Fetch categories
  useEffect(() => {
    const categoryRef = ref(database, 'categories'); // Use the imported database instance

    onValue(categoryRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const categoriesArray = Object.values(data);
        setCategories(categoriesArray);
      }
    });
  }, []);

  // Set the selected category from URL when the component mounts
  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
      
      
      // Filter courses by selected category
      const filtered = courses.filter(course => 
        course.selectedCategory && course.selectedCategory === categoryFromURL // Removed toLowerCase
      );
      setFilteredCourses(filtered);
    }
  }, [categoryFromURL, courses]); // Run when categoryFromURL or courses change

  // Handle search term change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = courses.filter(course => 
      course.courseName.toLowerCase().includes(value) // Only filter by courseName
    );

    setFilteredCourses(filtered);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const categoryID = e.target.value;
    setSelectedCategory(categoryID);

    // Filter courses by selected category
    if (categoryID === "") {
      setFilteredCourses(courses); // Reset to all courses if no category selected
    } else {
      const filtered = courses.filter(course => 
        course.selectedCategory && course.selectedCategory === categoryID // Removed toLowerCase
      );
      setFilteredCourses(filtered);
    }
  };

  return (
    <main>
      {/* =======================
      Page Banner START */}
      <section
        className="bg-dark align-items-center d-flex"
        style={{
          backgroundImage: `url(${png04})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Title */}
              <h1 className="text-white">Courses</h1>
              {/* Breadcrumb */}
              <div className="d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="fas fa-home fa-fw me-2" />
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Courses
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
      Page Banner END */}

      {/* =======================
      Page content START */}
      <section className="pt-5">
        <div className="container">
          {/* Search option START */}
          <div className="row mb-4 align-items-center">
            {/* Search bar */}
            <div className="col-sm-6 col-xl-4">
              <form className="border rounded  rounded-pill p-2">
                <div className="input-group input-borderless">
                  <input
                    className="form-control me-1"
                    type="search"
                    placeholder="Search course"
                    value={searchTerm}
                    onChange={handleSearchChange} // Capture input
                  />
                  
                    <i className="fas fa-search me-2 my-auto" />
                  
                </div>
              </form>
            </div>
            
            {/* Category dropdown */}
            <div className="col-sm-6 col-xl-4">
              <form className="border rounded p-2">
                <div className="input-group">
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange} // Capture category selection
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.categoryID}>
                        {category.categoryName}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
          {/* Search option END */}

          {/* Course listing START */}
          <div className="row g-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div className="col-md-6" key={index}>
                  {/* Make the entire card clickable */}
                  <Link
                    to={`/coursedetail/${course.courseID}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className={`card rounded overflow-hidden shadow`}>
                      <div className="row g-0">
                        {/* Image */}
                        <div className="col-md-4">
                          <img
                            src={course01} // Adjust to use actual course image if available
                            className="img-fluid"
                            width={207}
                            height={156}
                            alt="course"
                          />
                        </div>
                        {/* Card body */}
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* Title */}
                            <div className="d-flex justify-content-between mb-2">
                              <h5 className="card-title mb-0">
                                {course.courseName}
                              </h5>
                            </div>
                            {/* Description */}
                            <p className="mb-1">{course.courseDescription}</p>
                            {/* Info */}
                            <ul className="list-inline mb-1">
                              <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                                <i className="far fa-clock text-danger me-2" />
                                {course.courseDuration}
                              </li>
                              <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                                <i className="fas fa-book-open text-orange me-2" />
                                {course.courseMode}
                              </li>
                              <li className="list-inline-item h6 fw-light">
                                <i className="fas fa-calendar-alt text-success me-2" />
                                {` ${course.startDate} - ${course.endDate}`}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No courses found</p>
            )}
          </div>
          {/* Course listing END */}
        </div>
      </section>
      {/* =======================
      Page content END */}
    </main>
  );
};

export default CourseListBody;
