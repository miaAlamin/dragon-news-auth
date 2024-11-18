import { useContext, useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { authContex } from "../provider/AuthProvider";


const Login = () => {

  const {signInHandle, setUser} = useContext(authContex)
  const location = useLocation();
  // console.log(location)

 const Navigate = useNavigate()
 const [error, setError] = useState({});


  const LoginHandlefun = (e)=>{
    e.preventDefault();
    const form = new FormData(e.target)
    const email = form.get('email')
    const password = form.get('password')
    // console.log(email, password)

    signInHandle(email, password)
    .then(result=>{
      // console.log(result.user)
      setUser(result.user)
      Navigate(location?.state ? location.state : "/")
    })
    .catch(error=>{
      // console.log(error.message)
      setError({...error})
    })



  }


    return (
        <div className=" bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
           
      
          <div className=" bg-base-100 w-full max-w-lg">
            <form onSubmit={LoginHandlefun} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login your account</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder=" Enter your password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {
                error.login && <p>{error.login}</p>
              }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don not have an account {<Link to='/auth/register' className="text-blue-500 underline">Register</Link>}</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;