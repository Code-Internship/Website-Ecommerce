import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <Box className="fixed inset-0 flex items-center justify-center font-italic text-5xl bg-gray-300 ">
      <Stack className="text-center" spacing={4}>
        <Box className="row align-items-center d-flex flex-row text-white">
          <Box className="col-lg-6 text-lg-right pr-lg-4">
            <h1 className="display-1 mb-0">Chi tiết Sản Phẩm</h1>
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
        
      </Stack>
    </Box>
  );
};

export default ProductDetail;
