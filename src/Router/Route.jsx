import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/SignUpPage/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllUsers from "../Pages/AdminPanel/Allusers";
import AdminRoute from "./AdminRoute";
import ManageClass from "../Pages/AdminPanel/ManageClass";

import AddClass from "../Pages/MusicianPanel/AddClass";
import MyClasses from "../Pages/MusicianPanel/MyClasses";
import MusicianRoute from "./MusicianRoute";
import UpdateClass from "../Pages/MusicianPanel/UpdateClass";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import FeedBack from "./FeedBack";
import MySelectedClasses from "../Pages/StudentPanel/MySelectedClasses";
import MyEnrolledClasses from "../Pages/StudentPanel/MyEnrolledClasses";
import Payment from "../Pages/PaymentPage/Payment";
import PaymentHistory from "../Pages/StudentPanel/PaymentHistory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/logIn',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/instructors',
                element: <AllInstructors></AllInstructors>,
               
            },
            {
                path:'/allClasses',
                element:<AllClasses></AllClasses>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'',
                element:<p className='text-5xl text-center font-bold border-2 p-2 border-teal-500 hover:bg-teal-500 hover:bg-opacity-50 rounded animate-bounce'>Well come to Dashboard</p>
            },

            {
                path: '/dashboard/manageClass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:`/dashboard/feedback/:id`,
                element:<FeedBack></FeedBack>,
                loader:({params}) => fetch(`https://the-music-mystrey-server.vercel.app/feedback/${params.id}`)
            },

            // musician routes

        
            {
                path: '/dashboard/addClass',
                element: <MusicianRoute><AddClass></AddClass></MusicianRoute>
            },
            {
                path: '/dashboard/myClasses',
                element: <MusicianRoute><MyClasses></MyClasses></MusicianRoute>
            },
            {
                path: '/dashboard/musicianClasses/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(`https://the-music-mystrey-server.vercel.app/musicianClasses/${params.id}`)
            },

            // student routes
            {
                path:'/dashboard/mySelectedClasses',
                element:<MySelectedClasses></MySelectedClasses>
            },
            {
                path:'/dashboard/myEnrolledClasses',
                element:<MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path:'/dashboard/paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
            },

        ]
    }
]);

export default router