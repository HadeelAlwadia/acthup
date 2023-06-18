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
import Profile from "../screens/user/Profile";
import { authRoutes } from "./AuthRoutes";
import { userRoutes } from "./UserRoutes";
import CatergoyRoutes from "./CatergoyRoutes";
import CourseRoutes from "./CourseRoutes";
import WorkSpaceAndOffice from "./WorkSpace&OfficeRoutes";

const basicRoutes = [{ path: "/", element: <Home /> },
{ path: "/seach/:nameOfSearch", element: <div /> },
{ path: "*", element: <Error /> }]


const screensPath = [
  ...basicRoutes,
  ...authRoutes,
  ...userRoutes,
  ...CatergoyRoutes,
  ...CourseRoutes,
  ...WorkSpaceAndOffice
];

const routers = createBrowserRouter(screensPath);

export default routers;
