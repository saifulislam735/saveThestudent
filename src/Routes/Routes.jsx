import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import Post from "../Pages/Post/Post";
import SohidInfo from "../Pages/SohidInfo/SohidInfo";
import PrivateRoutes from "./PrivateRoutes";
import Admin from "../Admin/Admin/Admin";
import PostManage from "../Admin/PostManage/PostManage";
import BreakingNewsManage from "../Admin/BreakingNewsManage/BreakingNewsManage";
import SohidInfoManage from "../Admin/SohidInfoManage/SohidInfoManage";
import UserControl from "../Admin/UserControl/UserControl";
import AdminControl from "../Admin/AdminControl/AdminControl";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "post",
                element: (
                    <PrivateRoutes>
                        <Post />
                    </PrivateRoutes>
                ),
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "shoidInfo",
                element: <SohidInfo />,
            },
        ],
    },
    {
        path: "adminDash",
        element: <Admin />,
        children: [
            {
                path: "postmanage",
                element: <PostManage />,
            },
            {
                path: "breakingupdate",
                element: <BreakingNewsManage />,
            },
            {
                path: "shoidinfo",
                element: <SohidInfoManage />,
            },
            {
                path: "usercontrol",
                element: <UserControl />,
            },
            {
                path: "admincontrol",
                element: <AdminControl />,
            },
            // Add other child routes here
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export default router;
