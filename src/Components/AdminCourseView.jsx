import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // To get courseID from the URL
import { ref, get, database } from "../firebase"; // Import Firebase functions

const AdminCourseView = () => {
  const { courseID } = useParams(); // Get courseID from the route parameter
  const [course, setCourse] = useState(null);
  const [categoryName, setCategoryName] = useState(""); // Store category name
  const [skills, setSkills] = useState([]); // Store selected skills

  // Fetch course data from Firebase
  useEffect(() => {
    const courseRef = ref(database, `courses/${courseID}`);
    get(courseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const courseData = snapshot.val();
          setCourse(courseData); // Set course data in state

          // Fetch category name based on the selected category ID
          if (courseData.selectedCategory) {
            const categoryRef = ref(database, `categories/${courseData.selectedCategory}`);
            get(categoryRef).then((categorySnapshot) => {
              if (categorySnapshot.exists()) {
                setCategoryName(categorySnapshot.val().categoryName);
              }
            });
          }

          // Fetch skills based on the selected skills array
          if (courseData.selectedSkills) {
            const skillPromises = courseData.selectedSkills.map((skillID) =>
              get(ref(database, `skills/${skillID}`))
            );

            Promise.all(skillPromises)
              .then((skillSnapshots) => {
                const fetchedSkills = skillSnapshots.map((skillSnapshot) => {
                  return skillSnapshot.exists() ? skillSnapshot.val().skillName : null;
                });
                setSkills(fetchedSkills.filter(Boolean)); // Filter out any null values
              })
              .catch((error) => console.error("Error fetching skills: ", error));
          }
        } else {
          console.log("No data available for the given courseID");
        }
      })
      .catch((error) => {
        console.error("Error fetching course data: ", error);
      });
  }, [courseID]);

  return (
    <div className="page-content">
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        {/* Title */}
        <div className="row mb-3">
  <div className="col-12 d-sm-flex justify-content-between align-items-center">
    <Link to="/admincourselist" className="btn btn-sm btn-primary mb-0">
      Back
    </Link>
    
    <h1 className="h3 mb-2 mb-sm-0 mx-auto text-center">Course Details</h1>
    
    {/* Empty div to maintain the space balance */}
    <div style={{ width: '100px' }}></div>
  </div>
</div>

        <div className="row g-4">
          {/* Course information START */}
          <div className="col-xxl-12">
            <div className="card bg-transparent border rounded-3 h-100">
              <div className="card-header bg-light border-bottom"></div>
              <div className="card-body">
                {course ? (
                  <div className="row mt-3">
                    {/* Information item */}
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.courseName}</span>
                          <span>Course Name</span>
                          </div>
                         
                          
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.courseDescription}</span>
                          <span>Description</span>
                          </div>
                          
                         
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.courseDuration}</span>
                          <span>Duration</span>
                          </div>
                          
                         
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.courseMode}</span>
                          <span>Course Mode</span>
                          </div>
                         
                         
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{categoryName}</span>
                          <span>Category Name</span>
                          </div>
                          
                         
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.rating}</span>
                          <span>Rating</span>
                          </div>
                          
                          
                        </li>
                      </ul>
                    </div>
                    {/* Information item */}
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.startDate}</span>
                          <span>Start Date</span>
                          </div>
                         
                          
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.endDate}</span>
                          <span>End Date</span>
                          </div>
                          
                          
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">{course.totalLectures}</span>
                          <span>Total Lectures</span>
                          </div>
                          
                          
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">₹ {course.courseFee} </span>
                          <span>Course Fee</span>
                          
                          </div>
                          
                        </li>
                        <li className="list-group-item">
                          <div className="d-flex flex-column">
                          <span className="h6 mb-0">
                            {skills.length > 0 ? skills.join(", ") : "No skills selected"}
                          </span>
                          <span>Skills</span>
                          </div>
                          
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p>Loading course data...</p>
                )}
              </div>
            </div>
          </div> 
          {/* Course information END */}
        </div>
      </div>
      {/* Page main content END */}
    </div>
  );
};

export default AdminCourseView;
