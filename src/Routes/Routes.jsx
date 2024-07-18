import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import Error from "../Pages/Error/Error";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";

import Post from "../Pages/Post/Post";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'post',
                element: <Post></Post>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
]);

export default router;