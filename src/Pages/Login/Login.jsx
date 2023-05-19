import React, { useContext, useState } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    if (password.length < 6) {
      setError('Please at least 6 digit password')
    }
    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        setError('')
        setSuccess('Login successful')
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)
      })

  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-12">
          <img src={img1} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body card">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" id="" />
              </div>
            </form>
            <p className='text-center'>New to Car Toys Shop <Link to="/signup" className='text-orange-500 font-bold'>Sign Up</Link> </p>
            <SocialLogin></SocialLogin>
            <p className='text-center text-green-600'> {success} </p>
            <p className='text-center text-red-500'> {error} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;