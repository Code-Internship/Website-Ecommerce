import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
  const { userToken } = userStateContext();

if(userToken){
  return <Navigate to="/"/>
}

  return (
    <Box>
      <Box className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Box className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default GuestLayout;
