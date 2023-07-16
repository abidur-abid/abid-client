import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Main Pages/Home";
import About from "../Main Pages/About";
import Skills from "../Main Pages/Skills";
import Projects from "../Main Pages/Projects";
import Blogs from "../Main Pages/Blogs";
import Contact from "../Main Pages/Contact";
import Dashboard from "../Layouts/Dashboard";
import UploadBlog from "../Dashboard Pages/UploadBlog";
import UploadProject from "../Dashboard Pages/UploadProject";
import PrivateRoute from '../../Authentication/Routes/PrivateRoute'
import LogIn from '../../Authentication/Components/LogIn'


 // here router must be export for all project 
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/skills',
          element: <Skills></Skills>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/uploadblog',
          element: <UploadBlog></UploadBlog>
        },
        {
          path: '/dashboard/uploadproject',
          element: <UploadProject></UploadProject>
        },
      ]
    }
  ]);