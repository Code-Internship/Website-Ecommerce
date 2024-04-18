import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Homepage from "../pages/HomePage.jsx";
import GuestLayout from "../components/GuestLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/guest",
    element: <GuestLayout />,
    children: [
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
