import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Error from '../screens/Error'
import Courses from "../screens/Courses";
import CoursDetalies from "../screens/CoursDetalies";
import Categories from "../screens/Categories";
import Booking from "../screens/booking/Booking";
import Login from "../screens/auth/login";
import ForgetPassword from "../screens/auth/ForgetPassword";
import OPT from "../screens/auth/OPT";
import SignUp from "../screens/auth/SignUp";

const screensPath = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Error /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses/:id", element: <CoursDetalies /> },
  { path: "/user/Booking", element: <Booking /> },
  { path: "/login", element: <Login /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
  { path: "/otp", element: <OPT /> },
  { path: "/signup", element: <SignUp /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },
  { path: "", element: <div /> },


  
];

const routers = createBrowserRouter(screensPath);

export default routers;
