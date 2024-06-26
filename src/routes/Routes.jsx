import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/MainLayout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element : <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      },
    ]
  },
 
]);