import React, { useState, useEffect } from "react";
import { database, ref, set, push, onValue } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const CreateCourseForm = () => {
    // State variables
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
        // Fetch categories from Firebase
        const categoriesRef = ref(database, "categories");
        onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val();
            setCategories(data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []);
        });
    }, []);

    useEffect(() => {
        // Fetch skills from Firebase
        const skillsRef = ref(database, "skills");
        onValue(skillsRef, (snapshot) => {
            const data = snapshot.val();
            setSkills(data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []);
        });
    }, []);

    const toTitleCase = (str) => str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    
    const formatDate = (date) => {
        const d = new Date(date);
        return `${String(d.getDate()).padStart(2, '0')} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()]} ${d.getFullYear()}`;
    };

    const addCourse = async (courseData) => {
        try {
            const courseID = push(ref(database, "courses")).key;
            await set(ref(database, `courses/${courseID}`), {
                courseID,
                ...courseData,
            });
            alert("Course data submitted successfully!");
            navigate("/admincourselist");
        } catch (error) {
            alert("Error writing to database: " + error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (new Date(startDate) > new Date(endDate)) {
            alert("End Date must be after Start Date.");
            return;
        }
        addCourse({
            courseName: toTitleCase(courseName),
            courseDescription: toTitleCase(courseDescription),
            courseDuration,
            courseFee: Number(courseFee),
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
            courseMode,
            rating,
            selectedCategory,
            selectedSkills,
            totalLectures,
        });
    };

    return (
        <div className="page-content">
            <div className="page-content-wrapper border">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/admincourselist" className="btn btn-dark">Back</Link>
                    <h4 className="mx-auto">Create Course</h4>
                </div>
                <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="row">
                        {/* Course Name */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Course Name</label>
                            <input type="text" className="form-control" placeholder="Enter Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
                        </div>
                        {/* Course Duration */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Course Duration</label>
                            <select className="form-control" value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} required>
                                {[1, 2, 3, 4, 5, 6].map(duration => <option key={duration} value={duration}>{duration} Month</option>)}
                            </select>
                        </div>
                        {/* Total Lectures */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Total Lectures</label>
                            <input type="number" className="form-control" placeholder="Enter Total Lectures" value={totalLectures} onChange={(e) => setTotalLectures(e.target.value)} required />
                        </div>
                        {/* Course Fee */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Course Fee</label>
                            <input type="number" className="form-control" placeholder="Enter Course Fee" value={courseFee} onChange={(e) => setCourseFee(Number(e.target.value))} required />
                        </div>
                    </div>
                    <div className="row">
                        {/* Start Date */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Start Date</label>
                            <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                        </div>
                        {/* End Date */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">End Date</label>
                            <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                        </div>
                        {/* Course Description */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-bold">Course Description</label>
                            <textarea className="form-control" placeholder="Enter Course Description" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row">
                        {/* Course Mode */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Course Mode</label>
                            <select className="form-control" value={courseMode} onChange={(e) => setCourseMode(e.target.value)} required>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                        {/* Rating */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Rating</label>
                            <select className="form-control" value={rating} onChange={(e) => setRating(e.target.value)} required>
                                {[5, 6, 7, 8, 9, 10].map(rate => <option key={rate} value={rate}>{rate}</option>)}
                            </select>
                        </div>
                        {/* Select Category */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Select Category</label>
                            <select className="form-control" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                                <option value="">Select Category</option>
                                {categories.map(category => <option key={category.id} value={category.id}>{category.categoryName}</option>)}
                            </select>
                        </div>
                        {/* Select Skills */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label fw-bold">Select Skills</label>
                            <div style={{ maxHeight: "150px", overflowY: "scroll" }}>
                                {skills.map(skill => (
                                    <div key={skill.id}>
                                        <label>
                                            <input type="checkbox" value={skill.id} checked={selectedSkills.includes(skill.id)} onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedSkills(prev => [...prev, skill.id]);
                                                } else {
                                                    setSelectedSkills(prev => prev.filter(id => id !== skill.id));
                                                }
                                            }} />
                                            {skill.skillName}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 d-flex justify-content-end float-end">
                        <button type="submit" className="btn btn-primary w-75">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCourseForm;
