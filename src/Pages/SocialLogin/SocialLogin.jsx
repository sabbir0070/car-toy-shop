import React, { useContext } from 'react';
import {  FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SocialLogin = () => {
const {googleSignIn} = useContext(AuthContext);
const handleGoogleSignIn = () =>{
googleSignIn()
.then(result=>{
console.log(result.user)
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