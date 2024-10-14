import React, { useState, useEffect } from "react";
import { ref, get, set, database } from "../firebase";
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditCourseForm = () => {
  const { courseID } = useParams(); // Get the courseID from the route parameter
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // State variables for form fields
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [totalLectures, setTotalLectures] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [courseMode, setCourseMode] = useState("Online");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rating, setRating] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Fetch course data on component mount
  useEffect(() => {
    const courseRef = ref(database, `courses/${courseID}`);
    get(courseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const courseData = snapshot.val();
          // Set the form fields with the fetched course data
          setCourseName(courseData.courseName);
          setCourseDescription(courseData.courseDescription);
          setCourseDuration(courseData.courseDuration);
          setTotalLectures(courseData.totalLectures); // Fetch total lectures
          setCourseFee(courseData.courseFee); // Fetch course fee
          setCourseMode(courseData.courseMode);
          setStartDate(courseData.startDate);
          setEndDate(courseData.endDate);
          setRating(courseData.rating); // Fetch rating
          setSelectedCategory(courseData.selectedCategory); // Fetch selected category
          setSelectedSkills(courseData.selectedSkills || []); // Fetch selected skills
        } else {
          console.log("No data available for the given courseID");
        }
      })
      .catch((error) => {
        console.error("Error fetching course data: ", error);
      });
  }, [courseID]);

  // Fetch categories from Firebase
  useEffect(() => {
    const categoriesRef = ref(database, "categories");
    get(categoriesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setCategories(Object.entries(data).map(([id, value]) => ({ id, ...value })));
        } else {
          setCategories([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  // Fetch skills from Firebase
  useEffect(() => {
    const skillsRef = ref(database, "skills");
    get(skillsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSkills(Object.entries(data).map(([id, value]) => ({ id, ...value })));
        } else {
          setSkills([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching skills: ", error);
      });
  }, []);

  // Function to convert a string to title case
  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Function to format date to "dd mm yyyy"
  const formatDate = (dateString) => {
      const date = new Date(dateString);
      const dd = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if needed
      const mm = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed, so add 1) and pad
      const yyyy = date.getFullYear(); // Get full year
      return `${dd} ${mm} ${yyyy}`; // Return in "dd mm yyyy" format
  };

  // Handle form submission to update the course in Firebase
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare updated data
    const updatedCourseData = {
      courseName: toTitleCase(courseName), // Convert to title case
      courseDescription,
      courseDuration,
      totalLectures,
      courseFee,
      courseMode,
      startDate: formatDate(startDate), // Format start date
      endDate: formatDate(endDate), // Format end date
      rating,
      selectedCategory,
      selectedSkills,
    };

    // Reference to the specific course in Firebase
    const courseRef = ref(database, `courses/${courseID}`);

    // Update course data in Firebase
    set(courseRef, updatedCourseData)
      .then(() => {
        alert("Course updated successfully!");
        // Navigate to the AdminCourseList after updating
        navigate("/admincourselist");
      })
      .catch((error) => {
        console.error("Error updating course data: ", error);
      });
  };

  return (
    <div className="page-content">
      <div className="page-content-wrapper border">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/admincourselist" className="btn btn-dark">
            Back
          </Link>
          <h4 className="mx-auto">Edit Course</h4>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Duration</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Course Duration"
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Total Lectures</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Total Lectures"
                value={totalLectures}
                onChange={(e) => setTotalLectures(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Course Fee</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Course Fee"
                value={courseFee}
                onChange={(e) => setCourseFee(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">End Date</label>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Course Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Course Description"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Mode</label>
              <select
                className="form-control"
                value={courseMode}
                onChange={(e) => setCourseMode(e.target.value)}
                required
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Rating</label>
              <select
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                {[5, 6, 7, 8, 9, 10].map((rate) => (
                  <option key={rate} value={rate}>{rate}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Category Name</label>
              <select
                className="form-control"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Select Skills</label>
              <div style={{ maxHeight: '150px', overflowY: 'scroll' }}>
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <label>
                      <input
                        type="checkbox"
                        value={skill.id}
                        checked={selectedSkills.includes(skill.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSkills((prev) => [...prev, skill.id]);
                          } else {
                            setSelectedSkills((prev) => prev.filter((id) => id !== skill.id));
                          }
                        }}
                      />
                      {skill.skillName}
                    </label>
                  </div>
                ))}
              </div>
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
}

export default EditCourseForm;
