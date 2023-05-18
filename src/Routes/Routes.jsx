import MainLayout from "../Layouts/MainLayout";

import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
{
path:'/login',
element:<Login></Login>
},
{
path:'signUp',
element:<SignUp></SignUp>
},
{
path:'/addToy',
element:<AddToy></AddToy>
}
    ]
  },
]);

export default router;