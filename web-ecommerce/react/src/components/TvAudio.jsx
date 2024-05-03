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

const TvAudio = () => {
  const curvedTVsData = [
    {
      id: 1,
      title: "Samsung 65Q9000 QLED 4K Smart TV",
      image: "https://media.4rgos.it/i/Argos/8209494_R_Z003A",
      price: "$3,299.99",
      total_rating: "4.5",
      total_review: "4",
    },
    {
      id: 2,
      title: "LG C2 OLED 4K Smart TV",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/samsung_qn65q70aafxza_q70a_65_class_hdr_1620619.jpg",
      price: "$2,499.99",
      total_rating: "3.5",
      total_review: "12",
    },
    {
      id: 3,
      title: "Sony A80J OLED 4K Smart TV",
      image:
        "https://cdn11.bigcommerce.com/s-9ivpkmlsfd/images/stencil/590x590/products/601/15383/1656935164_IMG_1787902__65690.1660921525.jpg?c=1",
      price: "$1,799.99",
      total_rating: "5",
      total_review: "23",
    },
    {
      id: 4,
      title: "Samsung 65Q9000 QLED 4K Smart TV",
      image:
        "https://www.abanista.com/wp-content/uploads/2022/06/QA85QN85A2.webp",
      price: "$3,299.99",
      total_rating: "3",
      total_review: "34",
    },
    {
      id: 5,
      title: "LG C2 OLED 4K Smart TV",
      image:
        "https://www.beachcamera.com/cdn/shop/products/922118_3_994x994.jpg?v=1689264070",
      price: "$2,499.99",
      total_rating: "2.5",
      total_review: "40",
    },
    {
      id: 6,
      title: "Sony A80J OLED 4K Smart TV",
      image:
        "https://www.beachcamera.com/cdn/shop/products/653013_7_1400x1400.jpg?v=1647171678",
      price: "$1,799.99",
      total_rating: "4.5",
      total_review: "40",
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
            </Grid>
          </Grid>
          {/** 3 o ben trai */}

          {/** 1 o giua */}
          <Grid item xs={5.1}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex"
              // alignItems="stretch"
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
                              // width: "400px",
                              // height: "300px",
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
                                // alignItems: "center",
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
              alignItems="flex-start"
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
            </Grid>
          </Grid>
          {/** 3 o ben phai */}
        </Grid>
      </Box>
    </>
  );
};

export default TvAudio;
