import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Error from '../screens/Error'
import { authRoutes } from "./AuthRoutes";
import { userRoutes } from "./UserRoutes";
import CatergoyRoutes from "./CatergoyRoutes";
import CourseRoutes from "./CourseRoutes";
import WorkSpaceAndOffice from "./WorkSpace&OfficeRoutes";
import Search from "../screens/Search";
import Notifaction from "../screens/User/Notifaction";

const basicRoutes = [{ path: "/", element: <Home /> },
{ path: `/search/:searchWord`, element: <Search /> },
{ path: "*", element: <Error /> },    { path: "/notifactions", element: <Notifaction/> },
]


const screensPath = [
  ...basicRoutes,
  ...authRoutes,
  ...userRoutes,
  ...CatergoyRoutes,
  ...CourseRoutes,
  ...WorkSpaceAndOffice
];

const RootRoutes = createBrowserRouter(screensPath);

export default RootRoutes;
