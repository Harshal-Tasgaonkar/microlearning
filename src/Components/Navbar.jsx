import React, { useEffect, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { database, ref, get } from '../firebase'; // Import Firebase

const Navbar = () => {
  const [courses, setCourses] = useState([]); // State to store all courses
  const [filteredCourses, setFilteredCourses] = useState([]); // State to store filtered courses
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input

  useEffect(() => {
    // Fetch courses from Firebase
    const fetchCourses = async () => {
      const coursesRef = ref(database, 'courses'); // Reference to 'courses' node
      try {
        const snapshot = await get(coursesRef);
        if (snapshot.exists()) {
          const coursesData = snapshot.val();
          const coursesArray = Object.values(coursesData); // Convert object to array

          // Limit to only 10 courses
          const limitedCourses = coursesArray.slice(0, 10);
          setCourses(limitedCourses); // Set the state with limited courses
          setFilteredCourses(limitedCourses); // Initially, show all courses in filteredCourses
        } else {
          console.log('No courses available');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once after initial render

  // Handle search input changes
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter courses based on search input
    const filtered = courses.filter((course) =>
      course.courseName.toLowerCase().includes(searchTerm)
    );
    setFilteredCourses(filtered);
  };

  return (
    <header className="navbar-light navbar-sticky header-static">
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          {/* Logo START */}
          <Link to="/" className="navbar-brand">
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>
           MICROLEARNING
          </span>
          </Link>
      {/* Logo END */}
          {/* Responsive navbar toggler */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>
          {/* Main navbar START */}
          <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
            {/* Nav category menu START */}
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              <li className="nav-item dropdown dropdown-menu-shadow-stacked">
                <a
                  className="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0 dropdown-toggle"
                  href="#"
                  id="categoryMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Courses</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="categoryMenu">
                  {/* Loop through filtered courses and display them */}
                  {filteredCourses.map((course) => (
                    <li key={course.courseID}>
                      <Link to={`/coursedetail/${course.courseID}`} className="dropdown-item">
                        {course.courseName}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0"
                      to="/courselist"
                    >
                      View all courses
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Nav category menu END */}
            {/* Nav Main menu START */}
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/" id="demoMenu">
                Home
              </NavLink>
              <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/coursecategories" id="">
                Category
              </NavLink>
              <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/courselist" id="pagesMenu">
                Courses
              </NavLink>
              <Link  className="nav-link"  id="accountMenu">
                Batches
              </Link>
              <NavLink  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/inquiry" id="advanceMenu">
                Inquiry
              </NavLink>
            </ul>
            {/* Nav Main menu END */}
            {/* Nav Search START */}
            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">
                <form className="position-relative">
                  <input
                    className="form-control pe-5 bg-transparent"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange} // Call the handler when input changes
                  />
                  <button
                    className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                    type="submit"
                  >
                    <i className="fas fa-search fs-6 " />
                  </button>
                </form>
              </div>
            </div>
            {/* Nav Search END */}
          </div>
          {/* Main navbar END */}
          {/* Login button START */}
          <div className="navbar-nav">
            <Link to="/login" className="btn btn-sm btn-dark mb-0">
              <i className="fas fa-power-off me-1" />
              Login
            </Link>
          </div>
          {/* Login button END */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
