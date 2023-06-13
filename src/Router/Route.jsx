import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/SignUpPage/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllUsers from "../Pages/AdminPanel/Allusers";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/AdminPanel/AdminHome";
import ManageClass from "../Pages/AdminPanel/ManageClass";
import MusicianHome from "../Pages/MusicianPanel/MusicianHome";
import AddClass from "../Pages/MusicianPanel/AddClass";
import MyClasses from "../Pages/MusicianPanel/MyClasses";
import MusicianRoute from "./MusicianRoute";
import UpdateClass from "../Pages/MusicianPanel/UpdateClass";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import FeedBack from "./FeedBack";

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
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
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
                loader:({params}) => fetch(`http://localhost:5000/feedback/${params.id}`)
            },

            // musician routes

            {
                path: '/dashboard/musicianHome',
                element: <MusicianRoute><MusicianHome></MusicianHome></MusicianRoute>
            },
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
                loader: ({ params }) => fetch(`http://localhost:5000/musicianClasses/${params.id}`)
            }

        ]
    }
]);

export default router