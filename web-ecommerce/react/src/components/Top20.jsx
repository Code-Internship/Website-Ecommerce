import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";

const Top20 = () => {
  const topData = [
    {
      id: 1,
      title: "HP ENVY 7644 <br> All-in-One Printer",
      image:
        "https://i.pinimg.com/564x/65/c5/27/65c5271a77e6c327a6fd90e1b241e81d.jpg",
      price: "$199.99",
    },
    {
      id: 2,
      title: "AirPort Express <br> from Apple",
      image:
        "https://macstores.vn/wp-content/uploads/2017/04/airport-express-gen-2.jpg",
      price: "$99.00",
    },
    {
      id: 3,
      title: "Gear Controller <br> Step Into Rift",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgYQsozBBHRMM8DWs7qVTMgvpugAyG9tguDoynn4wbQ&s",
      price: "$99.95",
    },
    {
      id: 4,
      title: "Sonos Boost <br> by Mediamarket",
      image:
        "https://cdn.shopify.com/s/files/1/0561/0022/5204/products/SONOSBOOST_360x.jpg?v=1630443813",
      price: "$99.95",
    },
    {
      id: 5,
      title: "Oculus <br> Rift + Touch",
      image:
        "https://m.media-amazon.com/images/I/418-imFfsGL._SY300_SX300_QL70_FMwebp_.jpg",
      price: "$99.95",
    },
    // thêm id, ảnh, ... ở đây
  ];

  const handleAddToCart = (product) => {
    console.log("Adding product to cart:", product);
  };

  const [cart, setCart] = useState([]);

  const onAddtoCartHandler = (product) => {
    if (cart.indexOf(product) !== -1) return null;
    const arr = [...cart];
    product.amount = 1;
    arr.push(product);
    setCart([...arr]);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container flexDirection={{ xs: "column", sm: "row" }}>
          <Grid container spacing={2}>
            {topData.slice(0, 5).map((top) => (
              <Grid item xs key={top.id}>
                <Card>
                  <CardActionArea>
                    <Box textAlign="center">
                      <Box className="group relative inline-block">
                        <CardMedia
                          sx={{
                            width: "130px",
                            height: "100px",
                          }}
                          image={top.image}
                          alt={top.title}
                        />
                      </Box>

                      <Box
                        sx={{
                          paddingLeft: "1rem",
                          paddingRight: "1rem",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#2196f3",
                            fontWeight: "bold",
                          }}
                        >
                          {top.price}
                        </Typography>
                        <div dangerouslySetInnerHTML={{ __html: top.title }} />
                      </Box>
                    </Box>
                  </CardActionArea>
                  <Box className="text-4xl text-center font-bold" style={{ border: "50% solid black" }}>
                    {cart.indexOf(top) !== -1 ? (
                      <span>Sản phẩm đã có trong giỏ</span>
                    ) : (
                      <Button
                        variant="contained"
                        style={{
                          border: "50% solid black",
                          transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = 'green';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = '';
                        }}
                        color="warning"
                        onClick={() => onAddtoCartHandler(top)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Top20;
