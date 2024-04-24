import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box className="fixed inset-0 flex items-center justify-center font-italic text-5xl bg-gray-900">
      <Stack className="text-center" spacing={4}>
        <Box className="text-white">404 - Page Not Found</Box>
        <Box>
          <Link
            to="/"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Go Home
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default NotFound;
