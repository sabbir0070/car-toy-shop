import React, { useContext, useState } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {
  const { createUser, updateProfileAndPhoto } = useContext(AuthContext);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
form.reset();
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        updatePhotoAndName(loggedUser, name, photo)
        setError('')
        setSuccess('Create New Account Successful')
        console.log(loggedUser)

      })
      .catch(error => {

        setSuccess('')
        setError(error.message)
      })
  }
  const updatePhotoAndName = (user, name, photo) => {
    updateProfileAndPhoto(user, name, photo)
      .then(() => {
        console.log('profile photo and name updated')
      })
      .catch(error => {
        setSuccess('')
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
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="url" name='photo' placeholder="Enter Your Photo Url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" id="" />
              </div>
            </form>
            <p className='text-center'>Already have an account! <Link to="/login" className='text-orange-500 font-bold'>Login</Link> </p>
            <SocialLogin></SocialLogin>
            <p className='text-center text-green-600'> {success} </p>
            <p className='text-center text-red-500'> {error} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;