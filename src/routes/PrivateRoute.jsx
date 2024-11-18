/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContex);
    const location = useLocation();
    // console.log(location)

    if(loading){
        return <LoadingPage/>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;