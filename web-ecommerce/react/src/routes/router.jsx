import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Homepage from "../pages/HomePage";

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
  {
    path: "/app",
    element: <App />,
  },
]);

export default router;
