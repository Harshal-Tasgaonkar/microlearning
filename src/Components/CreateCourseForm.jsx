import React, { useState, useEffect } from "react";
import { database, ref, set, push, onValue } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const CreateCourseForm = () => {
    const [courseName, setCourseName] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseDuration, setCourseDuration] = useState(1);
    const [courseFee, setCourseFee] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [courseMode, setCourseMode] = useState("Online");
    const [rating, setRating] = useState(5);
    const [totalLectures, setTotalLectures] = useState("");

    const [categories, setCategories] = useState([]);
    const [skills, setSkills] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const categoriesRef = ref(database, "categories");
        onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setCategories(Object.entries(data).map(([id, value]) => ({ id, ...value })));
            } else {
                setCategories([]);
            }
        });
    }, []);

    useEffect(() => {
        const skillsRef = ref(database, "skills");
        onValue(skillsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSkills(Object.entries(data).map(([id, value]) => ({ id, ...value })));
            } else {
                setSkills([]);
            }
        });
    }, []);

    const toTitleCase = (str) => {
        return str
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const toTitleCaseDescription = (str) => {
        const words = str.split(" ");
        if (words.length > 0) {
            words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
        }
        return words.join(" ");
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[d.getMonth()];
        const year = d.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const addCourse = (courseData) => {
        const courseID = push(ref(database, "courses")).key;
        const courseRef = ref(database, `courses/${courseID}`);
        set(courseRef, {
            courseID,
            ...courseData,
        })
            .then(() => {
                alert("Course data submitted successfully!");
                navigate("/admincourselist");
            })
            .catch((error) => {
                console.error("Error writing to database: ", error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);

        const courseData = {
            courseName: toTitleCase(courseName),
            courseDescription: toTitleCaseDescription(courseDescription), // Format first word in title case
            courseDuration,
            courseFee,
            startDate: formattedStartDate,  // Format before sending to Firebase
            endDate: formattedEndDate,      // Format before sending to Firebase
            courseMode,
            rating,
            selectedCategory,
            selectedSkills,
            totalLectures,
        };

        addCourse(courseData);
    };

    return (
        <div className="page-content">
            <div className="page-content-wrapper border">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/admincourselist" className="btn btn-dark">
                        Back
                    </Link>
                    <h4 className="mx-auto">Create Course</h4>
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
                            <select
                                className="form-control"
                                value={courseDuration}
                                onChange={(e) => setCourseDuration(e.target.value)}
                                required
                            >
                                {[1, 2, 3, 4, 5, 6].map((duration) => (
                                    <option key={duration} value={duration}>
                                        {duration} Month
                                    </option>
                                ))}
                            </select>
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
                                placeholder="Enter Course Description"
                                value={courseDescription}
                                onChange={(e) => setCourseDescription(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Course Mode</label>
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
                                    <option key={rate} value={rate}>
                                        {rate}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Select Category</label>
                            <select
                                className="form-control"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                required
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Select Skills</label>
                            <div style={{ maxHeight: "150px", overflowY: "scroll" }}>
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
                                                        setSelectedSkills((prev) =>
                                                            prev.filter((id) => id !== skill.id)
                                                        );
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCourseForm;
