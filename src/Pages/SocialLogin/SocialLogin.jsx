import React, { useContext } from 'react';
import {  FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
const {googleSignIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || '/';
const handleGoogleSignIn = () =>{
googleSignIn()
.then(result=>{
// console.log(result.user)
navigate(from,{replace: true});
})
.catch(error=>{
console.log(error.message)
})
}

  return (
    <div className='divider text-green-600'>
  <p onClick={handleGoogleSignIn}><FaGoogle className='w-8 h-8'></FaGoogle></p>
    </div>
  );
};

export default SocialLogin;