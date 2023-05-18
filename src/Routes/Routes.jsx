import MainLayout from "../Layouts/MainLayout";

import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";


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
},
{
path:'/allToy',
element:<AllToys></AllToys>
}
    ]
  },
]);

export default router;