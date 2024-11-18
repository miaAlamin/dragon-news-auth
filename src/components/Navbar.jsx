import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { authContex } from "../provider/AuthProvider";


const Navbar = () => {

  const {user,  LogOut} = useContext(authContex)

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="/dev">Dev Information</Link>

      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          
          {
            user && user?.email? <div className="flex justify-center items-center flex-col">
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
              <p className="text-xs">Al Amin Mia</p>
            </div> : <img src={userIcon} alt="" />
          }
        </div>
        {
          user ? <>
          
          
           <button onClick={LogOut} className="btn btn-neutral rounded-none">Log out</button>
          </>
           :  
           
           <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
