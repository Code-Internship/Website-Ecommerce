import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
  Stack,
  Rating,
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
    // Add more curved TV data as needed
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          {/** 3 o ben trai */}
          <Grid item xs>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
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
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/** 3 o ben trai */}

          {/** 1 o giua */}
          <Grid item xs={5.1}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
            >
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
                            width: "400px",
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
                            <Box>{"- " + curvedTV.title}</Box>
                            <Box>{"- " + curvedTV.sensor_type}</Box>
                            <Box>{"- " + curvedTV.megapixels}</Box>
                            <Box>{"- " + curvedTV.lens_mount}</Box>
                            <Box>{"- " + curvedTV.video_resolution}</Box>{" "}
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
            </Grid>
          </Grid>
          {/** 1 o giua */}

          {/** 3 o ben phai */}
          <Grid item xs>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
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
                            <Box>{"- " + curvedTV.title}</Box>
                            <Box>{"- " + curvedTV.sensor_type}</Box>
                            <Box>{"- " + curvedTV.megapixels}</Box>
                            <Box>{"- " + curvedTV.lens_mount}</Box>
                            <Box>{"- " + curvedTV.video_resolution}</Box>{" "}
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
            </Grid>
          </Grid>
          {/** 3 o ben phai */}
        </Grid>
      </Box>
    </>
  );
};

export default CameraPhotos;
