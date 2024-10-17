import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { database, ref, onValue } from "../firebase"; // Adjust imports
import category1 from "../Assets/images/element/category-1.svg"
import category2 from "../Assets/images/element/category-2.svg"


const CourseCategoriesBody = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    const categoryRef = ref(database, 'categories');
    onValue(categoryRef, (categorySnapshot) => {
      const categoriesData = [];
      categorySnapshot.forEach((categoryChildSnapshot) => {
        const category = categoryChildSnapshot.val();
        const categoryId = categoryChildSnapshot.key;
        const coursesRef = ref(database, 'courses');
        onValue(coursesRef, (coursesSnapshot) => {
          let courseCount = 0;
          coursesSnapshot.forEach((courseChildSnapshot) => {
            const course = courseChildSnapshot.val();
            if (course.selectedCategory === categoryId) {
              courseCount += 1;
            }
          });
          if (courseCount > 0) {
            categoriesData.push({
              categoryName: category.categoryName,
              courseCount: courseCount,
              categoryId: categoryId // Store category ID for reference
            });
          }
          setCategories(categoriesData);
          setFilteredCategories(categoriesData);
        });
      });
    });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter categories based on search input
    const filtered = categories.filter(category =>
      category.categoryName.toLowerCase().includes(query)
    );

    setFilteredCategories(filtered);
  };

  return (
    <main>
      {/* Page Banner START */}
      <section className="bg-light position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-6 col-md-3 text-center order-1">
                  <img src={category1} width="295" height="335" alt="" />
                </div>
                <div className="col-md-6 px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">
                  <h1 className="mb-3">What do you want to learn?</h1>
                  <p className="mb-3">Grow your skill with the most reliable online courses and certifications.</p>
                  <form className="bg-body rounded  rounded-pill p-2">
  <input
    className="form-control border-0 "
    type="search"
    placeholder="Search Category"
    value={searchQuery}
    onChange={handleSearch}
  />
</form>


                </div>
                <div className="col-6 col-md-3 text-center order-3">
                  <img src={category2} width="264" height="268" alt="" />
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
              <p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
            </div>
          </div>
          <div className="row g-4">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-xl-3">
                  <div className="card card-body bg-success bg-opacity-10 text-center position-relative btn-transition p-4">
                    <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                    <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <h5 className="mb-2">
                      {/* Link to /courselist with categoryId as a URL parameter */}
                      <Link to={`/courselist?category=${category.categoryId}`} className="stretched-link">
                        {category.categoryName}
                      </Link>
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
      {/* ... other sections ... */}

    </main>
  );
};

export default CourseCategoriesBody;
