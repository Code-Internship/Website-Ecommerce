import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
  Stack,
  Rating,
  Button,
} from "@mui/material";

const CarElectronicsGPS = () => {
  const curvedTVsData = [
    {
      id: 1,
      title:
        "Pioneer AVH-W4500NEX Double Din CarPlay & Android Auto In-Dash Multimedia Receiver",
      image:
        "https://www.customsounds.com/uploads/products/600x400-c6b5e7456a279e187020d6f8017fbbd3e7a081da.jpg",
      price: "$799.99",
      total_rating: "4.7",
      total_review: "15",
      category: "In-Dash Navigation",
      features: [
        "Apple CarPlay & Android Auto",
        "Built-in GPS",
        "HD touchscreen display",
        "Bluetooth connectivity",
      ],
    },
    {
      id: 2,
      title: "Garmin DriveSmart 66 LMT GPS Navigator",
      image:
        "https://th.bing.com/th/id/OIP.XfybexVOXX3IeLf_zbYiWAHaHa?rs=1&pid=ImgDetMain",
      price: "$269.99",
      total_rating: "4.2",
      total_review: "72",
      category: "Dash Camera",
      features: [
        "1440p resolution video recording",
        "140-degree viewing angle",
        "Wi-Fi connectivity for easy footage sharing",
        "Night vision mode",
      ],
    },
    {
      id: 3,
      title:
        "JVC KW-V660WI Double Din CarPlay & Android Auto In-Dash Multimedia Receiver",
      image:
        "https://th.bing.com/th/id/OIP.8wvC0seBlaO7A4XZ78rCJwHaGH?rs=1&pid=ImgDetMain",
      price: "$499.99",
      total_rating: "4.5",
      total_review: "98",
      category: "Car Stereo",
      features: [
        "Apple CarPlay compatibility",
        "Built-in Bluetooth",
        "AM/FM radio",
        "USB port for music playback",
      ],
    },
    {
      id: 4,
      title:
        "Kenwood DMX9707S 10.1” CarPlay & Android Auto Multimedia Receiver",
      image:
        "https://i5.walmartimages.com/asr/d1741d37-c0ca-4ca7-8a37-789fd4a5134a.aee1ecb33dc1edd320795d67e7689348.jpeg",
      price: "$1,199.99",
      total_rating: "4.0",
      total_review: "3",
      category: "Radar Detector",
      features: [
        "Alerts for speed traps and red light cameras",
        "360-degree laser detection",
        "Filter out K-band falses",
        "Bright OLED display",
      ],
    },
    {
      id: 5,
      title: "Cobra DRiVE Dash Cam 668 with Built-in Wi-Fi & GPS",
      image: "https://i.ytimg.com/vi/uVIKK43fRpQ/maxresdefault.jpg",
      price: "$199.99",
      total_rating: "3.8",
      total_review: "112",
      category: "Backup Camera",
      features: [
        "Night vision",
        "Waterproof",
        "Wide viewing angle",
        "Easy installation",
      ],
    },
    {
      id: 6,
      title: "Boss BV9355S CarPlay & Android Auto Double Din DVD Receiver",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298105cv13d.jpg",
      price: "$349.99",
      total_rating: "3.9",
      total_review: "55",
      category: "GPS Tracker",
      features: [
        "Real-time GPS tracking",
        "Over-speed alerts",
        "Geo-fencing",
        "Long battery life",
      ],
    },
    // Add more curved TV data as needed
  ];

  const handleAddToCart = (product) => {
    console.log("Adding product to cart:", product);
  };

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {/** 3 o ben trai */}
            <Box>
              {curvedTVsData.slice(0, 3).map((curvedTV) => (
                <Grid item key={curvedTV.id}>
                  <Box
                    sx={{
                      padding: "5px",
                    }}
                  >
                    <Card>
                      <CardActionArea>
                        <Box
                          className="inline-block flex"
                          sx={{
                            width: "300px",
                            padding: "0.5rem",
                          }}
                        >
                          <Box>
                            <CardMedia
                              sx={{
                                width: "100px",
                                height: "100px",
                              }}
                              image={curvedTV.image}
                              alt={curvedTV.title}
                            />
                          </Box>

                          <Box
                            sx={{
                              paddingLeft: "1rem",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#2196f3",
                                fontWeight: "bold",
                              }}
                            >
                              {curvedTV.price}
                            </Typography>
                            <Box>{curvedTV.title}</Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                fontWeight: "bold",
                              }}
                            >
                              <Stack spacing={1}>
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={curvedTV.total_rating}
                                  precision={0.5}
                                  readOnly
                                />
                              </Stack>
                              <Box className="ml-2">
                                ({curvedTV.total_review})
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Box>
            {/** 3 o ben trai */}

            {/** 1 o giua */}
            <Box>
              {curvedTVsData.slice(0, 1).map((curvedTV) => (
                <Grid item key={curvedTV.id}>
                  <Box
                    sx={{
                      padding: "5px",
                    }}
                  >
                    <Card>
                      <CardActionArea>
                        <Box
                          className="inline-block flex"
                          sx={{
                            maxWidth: {
                              xs: "300px",
                              sx: "300px",
                              sm: "400px",
                              lg: "500px",
                            },
                            padding: "0.5rem",
                          }}
                        >
                          <Box>
                            <CardMedia
                              sx={{
                                maxWidth: {
                                  xs: "100px",
                                  sx: "150px",
                                  sm: "190px",
                                  lg: "220px",
                                },
                                maxHeight: {
                                  xs: "100px",
                                  sx: "150px",
                                  sm: "190px",
                                  lg: "220px",
                                },
                                width: "220px",
                                height: "220px",
                              }}
                              image={curvedTV.image}
                              alt={curvedTV.title}
                            />
                          </Box>

                          <Box
                            sx={{
                              paddingLeft: "1rem",
                              maxWidth: {
                                xs: "200px",
                                sx: "220px",
                                sm: "230px",
                                lg: "250px",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#2196f3",
                                fontWeight: "bold",
                              }}
                            >
                              {curvedTV.price}
                            </Typography>
                            <Box>{"- " + curvedTV.title}</Box>
                            <Box>{"- " + curvedTV.category}</Box>
                            <Box>{"- " + curvedTV.features}</Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                fontWeight: "bold",
                              }}
                            >
                              <Stack spacing={1}>
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={curvedTV.total_rating}
                                  precision={0.5}
                                  readOnly
                                />
                              </Stack>
                              <Box className="ml-2">
                                ({curvedTV.total_review})
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          className="text-4xl text-center font-bold mb-3"
                          style={{ border: "50% solid black" }}
                        >
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={() => handleAddToCart(top)}
                          >
                            ADD TO CART
                          </Button>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Box>
            {/** 1 o giua */}

            {/** 3 o ben phai */}
            <Box>
              {curvedTVsData.slice(3, 6).map((curvedTV) => (
                <Grid item key={curvedTV.id}>
                  <Box
                    sx={{
                      padding: "5px",
                    }}
                  >
                    <Card>
                      <CardActionArea>
                        <Box
                          className="inline-block flex"
                          sx={{
                            width: "300px",
                            padding: "0.5rem",
                          }}
                        >
                          <Box>
                            <CardMedia
                              sx={{
                                width: "100px",
                                height: "100px",
                              }}
                              image={curvedTV.image}
                              alt={curvedTV.title}
                            />
                          </Box>

                          <Box
                            sx={{
                              paddingLeft: "1rem",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#2196f3",
                                fontWeight: "bold",
                              }}
                            >
                              {curvedTV.price}
                            </Typography>
                            <Box>{curvedTV.title}</Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                fontWeight: "bold",
                              }}
                            >
                              <Stack spacing={1}>
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={curvedTV.total_rating}
                                  precision={0.5}
                                  readOnly
                                />
                              </Stack>
                              <Box className="ml-2">
                                ({curvedTV.total_review})
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Box>
            {/** 3 o ben phai */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CarElectronicsGPS;
