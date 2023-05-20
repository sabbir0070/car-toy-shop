import MainLayout from "../Layouts/MainLayout";

import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToyModal from "../Pages/UpdateToyModal/UpdateToyModal";
import ToySingleSubDetails from "../Pages/Home/Home/ToySingleSubDetails/ToySingleSubDetails";


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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/allToy',
        element: <AllToys></AllToys>
      },
      {
        path: '/myToy',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/updateToyModal',
        element: <UpdateToyModal></UpdateToyModal>
      },
      {
        path: '/singleToy/:id',
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toys-car-project-server.vercel.app/singleToy/${params.id}`)
      },
      {
        path: '/singleSubDetails/:id',
        element: <PrivateRoute><ToySingleSubDetails></ToySingleSubDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toys-car-project-server.vercel.app/singleSubDetails/${params.id}`)
      }
    ]
  },

]);

export default router;