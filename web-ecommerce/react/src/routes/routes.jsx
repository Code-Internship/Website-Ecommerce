import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

const routes = createBrowserRouter([
  {
    path:'/app',
    element: <App />,
  },
]);

export default routes;
