import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box className="fixed inset-0 flex items-center justify-center font-italic text-5xl bg-gray-100  bg-primary">
      <Stack className="text-center" spacing={4}>
        <Box className="row align-items-center d-flex flex-row text-white">
          <Box className="col-lg-6 text-lg-right pr-lg-4">
            <h1 className="display-1 mb-0">404</h1>
          </Box>
          <Box className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
            <h2>SORRY!</h2>
            <h3 className="font-weight-light">
              The page you’re looking for was not found.
            </h3>
          </Box>
        </Box>
        <Box>
          <Link
            to="/"
            className="font-semibold leading-6 text-indigo-100 hover:text-indigo-900"
          >
            Go Home
          </Link>
        </Box>
        <Box className="row mt-5">
          <Box className="col-12 mt-xl-2">
            <p className="text-white font-weight-medium text-center">
              Copyright &copy;
              2024 All
              rights reserved.
            </p>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default NotFound;
