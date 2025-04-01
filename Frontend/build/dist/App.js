import React from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import PageNotFound from "./pages/PageNotFound.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import PrivateRoute from "./Components/Routes/Private.js";
import Dashboard from "./pages/user/Dashboard.js";
import AdminRoutes from "./Components/Routes/AdminRoutes.js";
import AdminDashboard from "./pages/Admin/AdminDahboard.js";
import Users from "./pages/Admin/Users.js";
import ViewUser from "./pages/Admin/ViewUser.js";
import EditUser from "./pages/Admin/EditUser.js";
import EditProfile from "./pages/user/EditProfile.js";
import CoursesPage from "./pages/user/CoursesPage.js";
import Courses from "./pages/Admin/Courses.js";
import AddCourses from "./pages/Admin/AddCourses.js";
import UpdateCourse from "./pages/Admin/UpdateCourse.js";
import Notes from "./pages/Notes.js";
import Languages from "./pages/Admin/Languages.js";
import AddLanguage from "./pages/Admin/AddLanguage.js";
import Technology from "./pages/Admin/Technology.js";
import AddTechnology from "./pages/Admin/AddTechnology.js";
import UpdateTechnology from "./pages/Admin/UpdateTechnology.js";
import UpdateLanguage from "./pages/Admin/UpdateLanguage.js";
import AddCourseNotes from "./pages/Admin/AddCourseNotes.js";
import AddCourseVideos from "./pages/Admin/AddCourseVideos.js";
import UpdateCourseNotes from "./pages/Admin/UpdateCourseNotes.js";
import UpdateCourseVideo from "./pages/Admin/UpdateCourseVideo.js";
import AddCourseMockTest from "./pages/Admin/AddCourseMockTest.js";
import UpdateCourseMockTest from "./pages/Admin/UpdateCourseMockTest.js";
import AddLanguageNotes from "./pages/Admin/AddLanguageNotes.js";
import UpdateLanguageDetails from "./pages/Admin/UpdateLanguageDetails.js";
import UpdateLanguageNotes from "./pages/Admin/UpdateLanguageNotes.js";
import UpdateCourseDetails from "./pages/Admin/UpdateCourseDetails.js";
import AddLanguageMockTest from "./pages/Admin/AddLanguageMockTest.js";
import UpdateLanguageMockTest from "./pages/Admin/UpdateLanguageMockTest.js";
import CourseMockTest from "./pages/CourseMockTest.js";
import LanguageMockTest from "./pages/LanguageMockTest.js";
import CourseDetails from "./pages/CourseDetails.js";
import Course from "./pages/Course.js";
import LearnCourse from "./pages/LearnCourse.js";
import CourseNotes from "./pages/CourseNotes.js";
import CourseVideo from "./pages/CourseVideo.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Homepage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/register",
    element: /* @__PURE__ */ React.createElement(Register, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/login",
    element: /* @__PURE__ */ React.createElement(Login, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/forgot-password",
    element: /* @__PURE__ */ React.createElement(ForgotPassword, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/contact",
    element: /* @__PURE__ */ React.createElement(Contact, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/about",
    element: /* @__PURE__ */ React.createElement(About, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/notes/:lang/:notes",
    element: /* @__PURE__ */ React.createElement(Notes, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/lang-mocktest/:lang/:mocktest",
    element: /* @__PURE__ */ React.createElement(LanguageMockTest, {
      key: window.location.pathname
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/get-course/:course",
    element: /* @__PURE__ */ React.createElement(CourseDetails, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/access-course/:course/:name",
    element: /* @__PURE__ */ React.createElement(Course, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/start-course/:course/:name",
    element: /* @__PURE__ */ React.createElement(LearnCourse, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/course-notes/:course/:notes",
    element: /* @__PURE__ */ React.createElement(CourseNotes, {
      key: window.location.pathname
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/course-mocktest/:course/:mocktest",
    element: /* @__PURE__ */ React.createElement(CourseMockTest, {
      key: window.location.pathname
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/course-lecture/:course/:video",
    element: /* @__PURE__ */ React.createElement(CourseVideo, {
      key: window.location.pathname
    })
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/*",
    element: /* @__PURE__ */ React.createElement(PageNotFound, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/profile",
    element: /* @__PURE__ */ React.createElement(PrivateRoute, null)
  }, /* @__PURE__ */ React.createElement(Route, {
    path: ":id",
    element: /* @__PURE__ */ React.createElement(Dashboard, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: ":id/edit",
    element: /* @__PURE__ */ React.createElement(EditProfile, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: ":id/courses",
    element: /* @__PURE__ */ React.createElement(CoursesPage, null)
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "/dashboard",
    element: /* @__PURE__ */ React.createElement(AdminRoutes, null)
  }, /* @__PURE__ */ React.createElement(Route, {
    path: "admin",
    element: /* @__PURE__ */ React.createElement(AdminDashboard, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/users",
    element: /* @__PURE__ */ React.createElement(Users, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/users/view/:id",
    element: /* @__PURE__ */ React.createElement(ViewUser, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/users/edit/:id",
    element: /* @__PURE__ */ React.createElement(EditUser, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/language",
    element: /* @__PURE__ */ React.createElement(Languages, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-language",
    element: /* @__PURE__ */ React.createElement(AddLanguage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-languageName/:lang",
    element: /* @__PURE__ */ React.createElement(UpdateLanguage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-language/:lang",
    element: /* @__PURE__ */ React.createElement(UpdateLanguageDetails, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-notes/:lang",
    element: /* @__PURE__ */ React.createElement(AddLanguageNotes, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-notes/:lang/:notes",
    element: /* @__PURE__ */ React.createElement(UpdateLanguageNotes, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-languageMocktest/:lang",
    element: /* @__PURE__ */ React.createElement(AddLanguageMockTest, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-languageMocktest/:lang/:mocktest",
    element: /* @__PURE__ */ React.createElement(UpdateLanguageMockTest, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/technology",
    element: /* @__PURE__ */ React.createElement(Technology, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-technology",
    element: /* @__PURE__ */ React.createElement(AddTechnology, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-technology/:tech",
    element: /* @__PURE__ */ React.createElement(UpdateTechnology, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/courses",
    element: /* @__PURE__ */ React.createElement(Courses, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-course",
    element: /* @__PURE__ */ React.createElement(AddCourses, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-courseName/:course",
    element: /* @__PURE__ */ React.createElement(UpdateCourse, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-course/:course",
    element: /* @__PURE__ */ React.createElement(UpdateCourseDetails, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-courseNotes/:course",
    element: /* @__PURE__ */ React.createElement(AddCourseNotes, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-courseNotes/:course/:notes",
    element: /* @__PURE__ */ React.createElement(UpdateCourseNotes, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-courseVideo/:course",
    element: /* @__PURE__ */ React.createElement(AddCourseVideos, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-courseVideo/:course/:video",
    element: /* @__PURE__ */ React.createElement(UpdateCourseVideo, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/add-courseMocktest/:course",
    element: /* @__PURE__ */ React.createElement(AddCourseMockTest, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "admin/update-courseMocktest/:course/:mocktest",
    element: /* @__PURE__ */ React.createElement(UpdateCourseMockTest, null)
  }))));
};
export default App;
