import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Error from '../screens/Error'

const screensPath = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Error /> },
  
];

const routers = createBrowserRouter(screensPath);

export default routers;
