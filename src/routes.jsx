import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import SignUp from './pages/signup';




export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    }, 
    {
        path: "/signup",
        element: <SignUp/>
    }, 
   
])
