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

const CameraPhotos = () => {
  const curvedTVsData = [
    {
      id: 1,
      title: "High-Resolution Professional Camera",
      image:
        "https://5.imimg.com/data5/DP/DY/MY-14415647/nikon-camera-500x500.jpg", // Replace with generic camera image
      price: "$3,299.99",
      sensor_type: "Placeholder - Update with actual sensor type", // Add imaginary specs
      megapixels: "Placeholder - Update with actual megapixel count",
      lens_mount: "Placeholder - Update with actual lens mount",
      video_resolution: "Placeholder - Update with actual video resolution",
      total_rating: "3.5",
      total_review: "46",
    },
    {
      id: 2,
      title: "4K Professional Camera with OLED Viewfinder",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/sony_hdvf_el20_0_7_full_hd_1197121.jpg", // Replace with generic camera image
      price: "$2,499.99",
      sensor_type: "Placeholder - Update with actual sensor type",
      megapixels: "Placeholder - Update with actual megapixel count",
      lens_mount: "Placeholder - Update with actual lens mount",
      video_resolution: "Placeholder - Update with actual video resolution",
      total_rating: "5",
      total_review: "14",
    },
    {
      id: 3,
      title: "High-Resolution Professional Camera",
      image:
        "https://5.imimg.com/data5/DP/DY/MY-14415647/nikon-camera-500x500.jpg", // Replace with generic camera image
      price: "$3,299.99",
      sensor_type: "Placeholder - Update with actual sensor type", // Add imaginary specs
      megapixels: "Placeholder - Update with actual megapixel count",
      lens_mount: "Placeholder - Update with actual lens mount",
      video_resolution: "Placeholder - Update with actual video resolution",
      total_rating: "3.5",
      total_review: "46",
    },
    {
      id: 4,
      title: "4K Professional Camera with OLED Viewfinder",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/sony_hdvf_el20_0_7_full_hd_1197121.jpg", // Replace with generic camera image
      price: "$2,499.99",
      sensor_type: "Placeholder - Update with actual sensor type",
      megapixels: "Placeholder - Update with actual megapixel count",
      lens_mount: "Placeholder - Update with actual lens mount",
      video_resolution: "Placeholder - Update with actual video resolution",
      total_rating: "5",
      total_review: "14",
    },
    {
      id: 5,
      title: "High-Resolution Professional Camera",
      image:
        "https://5.imimg.com/data5/DP/DY/MY-14415647/nikon-camera-500x500.jpg", // Replace with generic camera image
      price: "$3,299.99",
      sensor_type: "Placeholder - Update with actual sensor type", // Add imaginary specs
      megapixels: "Placeholder - Update with actual megapixel count",
      lens_mount: "Placeholder - Update with actual lens mount",
      video_resolution: "Placeholder - Update with actual video resolution",
      total_rating: "3.5",
      total_review: "46",
    },
    {
      id: 6,
      title: "4K Professional Camera with OLED Viewfinder",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/sony_hdvf_el20_0_7_full_hd_1197121.jpg", // Replace with generic camera image
      price: "$2,499.99",
      sensor_type: "Placeholder - Update with actual sensor type",
      megapixels: "Placeholder - Update with actual megapixel count",
      lens_mount: "Placeholder - Update with actual lens mount",
      video_resolution: "Placeholder - Update with actual video resolution",
      total_rating: "5",
      total_review: "14",
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
                            <Box>{"- " + curvedTV.sensor_type}</Box>
                            <Box>{"- " + curvedTV.megapixels}</Box>
                            <Box>{"- " + curvedTV.lens_mount}</Box>
                            <Box>{"- " + curvedTV.video_resolution}</Box>
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

export default CameraPhotos;
