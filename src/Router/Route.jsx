import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/SignUpPage/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/logIn',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:'dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                
            }
        ]
    }
]);

export default router