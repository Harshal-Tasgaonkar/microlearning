import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import course01 from "../Assets/images/courses/4by3/01.jpg";
import png04 from "../Assets/images/pattern/04.png";

const CourseListBody = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const courseRef = ref(db, 'courses'); // Assuming 'courses' is the path to your course data

    onValue(courseRef, (snapshot) => {
      const data = snapshot.val();
      const coursesArray = Object.values(data); // Converts the object to an array of courses
      setCourses(coursesArray);
      setFilteredCourses(coursesArray); // Initially set filtered courses to all courses
    });
  }, []);

  // Handle search term change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = courses.filter(course => 
      course.courseName.toLowerCase().includes(value) ||
      course.courseDescription.toLowerCase().includes(value)
    );

    setFilteredCourses(filtered);
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
        {/* Main banner background image */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Title */}
              <h1 className="text-white">Courses List Minimal</h1>
              {/* Breadcrumb */}
              <div className="d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-home fa-fw me-2" />Home</a>
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
              <form className="border rounded p-2">
                <div className="input-group input-borderless">
                  <input
                    className="form-control me-1"
                    type="search"
                    placeholder="Search course"
                    value={searchTerm}
                    onChange={handleSearchChange} // Capture input
                  />
                  <button type="button" className="btn btn-primary mb-0 rounded">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Search option END */}

          {/* Course listing START */}
          <div className="row g-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div className="col-md-6" key={index}> {/* Keep col-md-6 for two columns */}
                  <div className={`card rounded overflow-hidden shadow`}> {/* Removed margin classes */}
                    <div className="row g-0">
                      {/* Image */}
                      <div className="col-md-4">
                        <img
                          src={course01}
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
                              <a href="#">{course.courseName}</a>
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
                </div>
              ))
            ) : (
              <p>No courses found</p> // Display message if no courses match the search
            )}
          </div>
          {/* Course listing END */}
        </div>
      </section>
      {/* =======================
      Page content END */}
    </main>
  );
}

export default CourseListBody;
