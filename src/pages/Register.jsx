import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContex } from "../provider/AuthProvider";


const Register = () => {

    const {emailSignOutHandle, UpdateProfile, setUser} = useContext(authContex)
  const [error, setError] = useState({});
  const navigate = useNavigate()

    const loginHandle = (e)=>{
        e.preventDefault()
        const form = new FormData(e.target);
        const name = form.get('name')
        const photoUrl = form.get('photoUrl')
        const password = form.get('password')
        const email = form.get('email')
        // console.log(name,photoUrl, password, email)
        
        if(name.length < 6){
          setError({...error, name: 'moust be more the 6 caracter'})
          return
        }

        emailSignOutHandle(email, password)
        .then(result =>{
            // console.log(result.user)
            setUser(result.user)
            UpdateProfile({displayName: name, photoURL: photoUrl})
            .then(()=>{
              navigate('/')

            })
            // eslint-disable-next-line no-unused-vars
            .catch(error=>{
              // console.log(error);
            })
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error=>{
            // console.log(error.message)
        })

    }

    return (
        <div className=" bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
           
      
          <div className=" bg-base-100 w-full max-w-lg">
            <form onSubmit={loginHandle} className="card-body">

            <h1 className="text-3xl text-center font-bold">Register your account</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
              </div>
              {
                error.name &&  <label className="label">
                {error.name}
              </label>
              }
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photoUrl" placeholder="Enter your photo URL" className="input input-bordered" required />
              </div>
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
                 
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Have an account please {<Link to='/auth/login' className="text-blue-500 underline">Login</Link>}</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;