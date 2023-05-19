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
import SingleToy from "../shared/Navbar/SingleToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Gallery></Gallery>,
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
        element: <PrivateRoute>
          <AddToy></AddToy>
        </PrivateRoute>,
      },
      {
        path: "/myToys",
        element: <PrivateRoute>
          <MyToys></MyToys>
        </PrivateRoute>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/allToys/:id",
        element: <PrivateRoute>
          <SingleToy></SingleToy>
        </PrivateRoute>,
        loader: ({ params }) =>fetch(`http://localhost:5000/myToy/${params.id}`),
      },
    ],
  },
]);

export default router;
