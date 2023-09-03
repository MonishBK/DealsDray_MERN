// import { Routes, Route } from 'react-router-dom';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Login';
import Dashboard from './Dashboard';
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';
import Logout,{LogoutAll} from "./Logout"
import EditEmployee from './EditEmployee';
import SignUp from './SignUp';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/dash-board",
    element: <Dashboard/>,
  },
  {
    path: "/employee-list",
    element: <EmployeeList/>,
  },
  {
    path: "/create-employee",
    element: <CreateEmployee/>,
  },
  {
    path: "/edit-employee/:id",
    element: <EditEmployee/>,
  },
  {
    path: "/logout",
    element: <Logout/>,
  },
  {
    path: "/logout-all",
    element: <LogoutAll/>,
  },
]);

const BasicRouting = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default BasicRouting