import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3] min-h-screen">
            <nav className="w-11/12 mx-auto py-6">
                <Navbar/>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;