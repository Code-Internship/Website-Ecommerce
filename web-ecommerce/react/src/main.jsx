import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import routes from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider routes={routes}/>
  </React.StrictMode>
);
