import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import Error from "../Pages/Error/Error";
import Booking from "../Pages/Home/Booking/Booking";
import Order from "../Pages/Order/Order";


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
                path: 'bookings/:id',
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: 'order',
                element: <Order></Order>,
                loader: () => fetch(`http://localhost:5000/order`)
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
]);

export default router;