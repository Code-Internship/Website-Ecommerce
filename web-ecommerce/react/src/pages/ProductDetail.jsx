import { Box, Button } from "@mui/material";
import PageComponent from "../components/PageComponent";
import DefaultLayout from "../components/DefaultLayout";
const ProductDetail = () => {
  return (
    <Box>
      <PageComponent>
        <DefaultLayout />
        <Box className=" mb-3 grid grid-cols-1 gap-2 lg:grid-cols-2" style={{ marginTop: '100px' }}>
          <Box className="lg:col-span-1" style={{ marginLeft: '15%' }}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.BG7rUauKgvXARTWgtq-UdAHaHa&pid=Api&P=0&h=600"
              alt=""
              className="aspect-square object-cover transition group-hover:opacity-90"

            />
          </Box>
          <Box className="lg:col-span-1">
            <Box className="text-left mt-3">
              <Box className="mt-5">
                <h1 style={{ fontSize: "35px", marginTop: '80px' }}>Hover Camera Passport</h1>
                <h1 style={{ fontSize: "35px", }}>Personal Photographer</h1>
                <Box className="mt-2" style={{ fontSize: "25px", }}>
                    <Box className="inline-block">
                      <Box
                        className="text-lg font-bold"
                        style={{ color: "DodgerBlue", fontSize: "25px", }}
                      >
                        $499.99
                      </Box>
                    </Box>
                    <Box className="inline-block ml-3">
                      <Box className="text-gray-500 line-through">$269.00</Box>
                    </Box>
                  </Box>
                  <Box>
                    Ghi chú sản phẩm
                  </Box>
                  <Box
                    className="text-4xl font-bold"
                    style={{ border: "50% solid black" }}
                  >
                    <Button variant="contained" color="warning">
                      ADD TO CART
                    </Button>
                  </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </PageComponent>
    </Box>
  );
};

export default ProductDetail;
