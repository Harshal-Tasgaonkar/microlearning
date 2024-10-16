import React, { useEffect, useState } from 'react';
import category1 from "../Assets/images/element/category-1.svg";
import category2 from "../Assets/images/element/category-2.svg";
import svg08 from "../Assets/images/element/08.svg";
import svg15 from "../Assets/images/element/15.svg";
import { database, ref, onValue } from "../firebase"; // Adjust imports

const CourseCategoriesBody = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    // Fetch category data and associated course count from Firebase
    const categoryRef = ref(database, 'categories'); // Use the database instance

    onValue(categoryRef, (categorySnapshot) => {
      const categoriesData = [];

      categorySnapshot.forEach((categoryChildSnapshot) => {
        const category = categoryChildSnapshot.val();
        const categoryId = categoryChildSnapshot.key;

        // Fetch the number of courses for each category
        const coursesRef = ref(database, 'courses'); // Use the database instance
        onValue(coursesRef, (coursesSnapshot) => {
          let courseCount = 0;

          coursesSnapshot.forEach((courseChildSnapshot) => {
            const course = courseChildSnapshot.val();
            if (course.selectedCategory === categoryId) {
              courseCount += 1;
            }
          });

          // Only add categories with more than 0 courses
          if (courseCount > 0) {
            categoriesData.push({
              categoryName: category.categoryName,
              courseCount: courseCount,
            });
          }

          // Update state after all data is processed
          setCategories(categoriesData);
          setFilteredCategories(categoriesData); // Initialize filtered categories
        });
      });
    });
  }, []);

  // Function to handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter categories based on the search query
    const filtered = categories.filter(category =>
      category.categoryName.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  return (
    <main>
      {/* Page Banner START */}
      <section className="bg-light position-relative">
        {/* SVG decoration */}
        <figure className="position-absolute bottom-0 start-0 d-none d-lg-block">
          <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
            <path
              className="fill-warning opacity-5"
              d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 
              c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 
              c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 
              c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 
              c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
            />
          </svg>
        </figure>
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                {/* Image */}
                <div className="col-6 col-md-3 text-center order-1">
                  <img src={category1} width={295} height={335} alt="" />
                </div>
                {/* Content */}
                <div className="col-md-6 px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">
                  <h1 className="mb-3">What do you want to learn?</h1>
                  <p className="mb-3">
                    Grow your skill with the most reliable online courses and certifications.
                  </p>
                  <form className="bg-body rounded p-2">
                    <input
                      className="form-control border-0"
                      type="search"
                      placeholder="Search Category"
                      id="searchInput"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                  </form>
                </div>
                <div className="col-6 col-md-3 text-center order-3">
                  <img src={category2} width={264} height={268} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories START */}
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Choose a Category</h2>
              <p className="mb-0">
                Perceived end knowledge certainly day sweetness why cordially
              </p>
            </div>
          </div>
          <div className="row g-4">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-xl-3">
                  <div className="card card-body bg-success bg-opacity-10 text-center position-relative btn-transition p-4">
                    <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                      <img src={category2} width={55} height={59} alt="" />
                    </div>
                    <h5 className="mb-2">
                      <a href="#" className="stretched-link">{category.categoryName}</a>
                    </h5>
                    <h6 className="mb-0">{category.courseCount} Courses</h6>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No categories found.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Earn a Certificate & Best Online Courses START */}
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 position-relative overflow-hidden">
              <div className="bg-primary bg-opacity-10 rounded-3 p-5 h-100">
                <div className="position-absolute bottom-0 end-0 me-3">
                  <img src={svg08} width={314} height={200} alt="" />
                </div>
                <h3 className="mb-1">Earn a Certificate</h3>
                <p className="mb-3 h5 fw-light lead">
                  Get a globally recognized certificate.
                </p>
                <a href="#" className="btn btn-primary mb-0">
                  View Programs
                </a>
              </div>
            </div>
            <div className="col-lg-6 position-relative overflow-hidden">
              <div className="bg-secondary bg-opacity-10 rounded-3 p-5 h-100">
                <div className="position-absolute bottom-0 end-0 me-3">
                  <img src={svg15} width={235} height={200} alt="" />
                </div>
                <h3 className="mb-1">Best Online Courses</h3>
                <p className="mb-3 h5 fw-light lead">
                  Take the right course, become unstoppable.
                </p>
                <a href="#" className="btn btn-warning mb-0">
                  View Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseCategoriesBody;
