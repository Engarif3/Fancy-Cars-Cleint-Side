import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";

import Gallery from "../Gallery/Gallery";

import Blog from "./Blog/Blog";
import ErrorPage from "../Section/ErrorPage/ErrorPage";
import AddToy from "../shared/Navbar/AddToy";
import MyToys from "../shared/Navbar/MyToys";
import ShopByCategory from "../Section/ShopByCategory";
import AllToys from "../shared/Navbar/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Gallery></Gallery>,
        // loader: () =>
        //   fetch("https://assignment-server-engarif3.vercel.app/chefs"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      },
    //   {
    //     path:"/category",
    //     element:<ShopByCategory></ShopByCategory>,
    //     loader: ()=>fetch("http://localhost:5000/myToy")
    //   },
    ],
  },
]);

export default router;
