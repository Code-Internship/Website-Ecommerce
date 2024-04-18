import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Homepage from "../pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default router;
