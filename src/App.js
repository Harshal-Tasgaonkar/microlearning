

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './Assets/css/style.css';
//  import './Assets/css/all.min.css'
//  import './Assets/css/tiny-slider.css';
//  import './Assets/css/glightbox.css';
//  import './Assets/css/choices.min.css';
//  import './Assets/css/aos.css';
//  import './Assets/css/quill.snow.css'
//  import './Assets/css/apexcharts.css'
//  import './Assets/css/bs-stepper.min.css'

 
// import EditStudent from './Components/EditStudent';
// import CreateStudent from './Components/CreateStudent';

//  import AdminStudentList from './Components/AdminStudentList';
// import EditTeacher from './Components/EditTeacher';
// import CreateTeacher from './Components/CreateTeacher';
// import AdminTeacherList from './Components/AdminTeacherList';

// import EditCourse from './Components/EditCourse';
// import CreateCourse from './Components/CreateCourse';
// import AdminCourseList from './Components/AdminCourseList';
// import AdminDashboard from './Components/AdminDashboard';
// import CourseList from './Components/CourseList';
// import CourseDetail from './Components/CourseDetail';
// import Login from './Components/Login';
// import Inquiry from './Components/Inquiry';
// import BecomeInstructor from './Components/BecomeInstructor';
// import AboutUs from './Components/AboutUs';
// import ContactUs from './Components/ContactUs';
// import CourseCategories from './Components/CourseCategories';
// import Home from './Components/Home';
// import CourseView from './Components/CourseView';
// import TeacherView from './Components/TeacherView';
// import StudentView from './Components/StudentView';
// import TeacherDashboard from './Components/TeacherDashboard';
// import StudentDashboard from './Components/StudentDashboard';


// function App() {
//   return (
    
//     < BrowserRouter>
//      <Routes>

//       {/* Define your routes here */}
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<AboutUs/>} />
//       <Route path="/contact" element={<ContactUs/>} />
//       <Route path="/coursecategories" element={<CourseCategories/>} />
//       <Route path="/becomeinstructor" element={<BecomeInstructor/>} />
//       <Route path="/inquiry" element={<Inquiry/>} />
//       <Route path="/login" element={<Login/>} />
//       <Route path="/coursedetail" element={<CourseDetail/>} />
//       <Route path="/courselist" element={<CourseList/>} />
//       <Route path="/admindashboard" element={<AdminDashboard/>} />
//       <Route path="/admincourselist" element={<AdminCourseList/>} />
//       <Route path="/createcourse" element={<CreateCourse/>} />
//       <Route path="/editcourse/:courseID" element={<EditCourse/>} />
//       <Route path="/adminteacherlist" element={<AdminTeacherList/>} />
//       <Route path="/createteacher" element={<CreateTeacher/>} />
//       <Route path="/editteacher/:teacherID" element={<EditTeacher/>} />
//       <Route path="/adminstudentlist" element={<AdminStudentList/>} />
//       <Route path="/createstudent" element={<CreateStudent/>} />
//       <Route path="/editstudent/:studentID" element={<EditStudent/>} />
//       <Route path="/courseview/:courseID" element={<CourseView/>} />
//       <Route path="/teacherview/:teacherID" element={<TeacherView/>} />
//       <Route path="/studentview/:studentID" element={<StudentView/>} />
//       <Route path="/teacherdashboard" element={<TeacherDashboard/>} />
//       <Route path="/studentdashboard" element={<StudentDashboard/>} />

//      </Routes>
//     </BrowserRouter>


      
   

//   );
// }

// export default App;





import { HashRouter, Routes, Route } from 'react-router-dom'; // Change BrowserRouter to HashRouter

import './Assets/css/style.css';
import './Assets/css/all.min.css';
import './Assets/css/tiny-slider.css';
import './Assets/css/glightbox.css';
import './Assets/css/choices.min.css';
import './Assets/css/aos.css';
import './Assets/css/quill.snow.css';
import './Assets/css/apexcharts.css';
import './Assets/css/bs-stepper.min.css';

import EditStudent from './Components/EditStudent';
import CreateStudent from './Components/CreateStudent';
import AdminStudentList from './Components/AdminStudentList';
import EditTeacher from './Components/EditTeacher';
import CreateTeacher from './Components/CreateTeacher';
import AdminTeacherList from './Components/AdminTeacherList';
import EditCourse from './Components/EditCourse';
import CreateCourse from './Components/CreateCourse';
import AdminCourseList from './Components/AdminCourseList';
import AdminDashboard from './Components/AdminDashboard';
import CourseList from './Components/CourseList';
import CourseDetail from './Components/CourseDetail';
import Login from './Components/Login';
import Inquiry from './Components/Inquiry';
import BecomeInstructor from './Components/BecomeInstructor';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import CourseCategories from './Components/CourseCategories';
import Home from './Components/Home';
import CourseView from './Components/CourseView';
import TeacherView from './Components/TeacherView';
import StudentView from './Components/StudentView';
import TeacherDashboard from './Components/TeacherDashboard';
import StudentDashboard from './Components/StudentDashboard';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/coursecategories" element={<CourseCategories />} />
        <Route path="/becomeinstructor" element={<BecomeInstructor />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admincourselist" element={<AdminCourseList />} />
        <Route path="/createcourse" element={<CreateCourse />} />
        <Route path="/editcourse/:courseID" element={<EditCourse />} />
        <Route path="/adminteacherlist" element={<AdminTeacherList />} />
        <Route path="/createteacher" element={<CreateTeacher />} />
        <Route path="/editteacher/:teacherID" element={<EditTeacher />} />
        <Route path="/adminstudentlist" element={<AdminStudentList />} />
        <Route path="/createstudent" element={<CreateStudent />} />
        <Route path="/editstudent/:studentID" element={<EditStudent />} />
        <Route path="/courseview/:courseID" element={<CourseView />} />
        <Route path="/teacherview/:teacherID" element={<TeacherView />} />
        <Route path="/studentview/:studentID" element={<StudentView />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
