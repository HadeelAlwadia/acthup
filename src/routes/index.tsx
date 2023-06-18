import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Error from '../screens/Error'
import Courses from "../screens/Courses";
import CoursDetalies from "../screens/CoursDetalies";
import SignUp from "../screens/auth/SignUp";
import Login from "../screens/auth/login";
import OTP from "../screens/auth/OTP";
import ForgetPassword from "../screens/auth/ForgetPassword";
import Booking from "../screens/booking/Booking";

const screensPath = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Error /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses/:id", element: <CoursDetalies /> },
  { path: "/user/Booking", element: <Booking /> },
  { path: "/login", element: <Login /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
  { path: "/otp", element: <OTP /> },
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
