import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Homepage from "../pages/HomePage.jsx";
import GuestLayout from "../components/GuestLayout.jsx";
import DefaultLayout from "../components/DefaultLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
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
]);

export default router;
