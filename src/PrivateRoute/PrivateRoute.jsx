import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
const {user,loading} = useContext(AuthContext);
const location = useLocation();


if(loading){
return <div className='text-center mx-auto'><progress className="progress w-56"></progress></div>
}

if(user){
return children;
}


Swal.fire("You have to log in first to view details");
  return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoute;