/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    // console.log(children);
    const { user, loading } = useAuth()
    const location = useLocation();

    if (loading) {
        return (
            <div className="w-screen flex justify-center">
                Loading....
            </div>
        );
    }
    if (user) {
        return children;
    }
    return (
        <div>
            {
                toast.error('Please login first')
            }
            <Navigate state={location?.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;