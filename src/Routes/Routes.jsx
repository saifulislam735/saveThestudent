import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
]);

export default router;