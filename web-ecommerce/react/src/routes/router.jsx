import { createBrowserRouter, Navigate } from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import HomePage from "../pages/HomePage.jsx";
import GuestLayout from "../components/GuestLayout.jsx";
import DefaultLayout from "../components/DefaultLayout.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import BrandsPage from "../pages/BrandsPage.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/Home",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Shop",
        element: <ShopPage />,
      },
      {
        path: "/Blog",
        element: <BlogPage />,
      },
      {
        path: "/Products",
        element: <ProductsPage />,
      },
      {
        path: "/Brands",
        element: <BrandsPage />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
