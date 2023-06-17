import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Error from '../screens/Error'

const screensPath = [
  { path: "/", element: <div /> },
  { path: "*", element: <Error /> },
  { path: "/courses", element: <div /> },
  { path: "", element: <Error /> },
  { path: "", element: <Error /> },
  { path: "/", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },
  { path: "*", element: <Error /> },


  
];

const routers = createBrowserRouter(screensPath);

export default routers;
