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

const ComputerLaptops = () => {
  const curvedTVsData = [
    {
      id: 1,
      title: "High-Performance Gaming Laptop",
      image:
        "https://th.bing.com/th/id/OIF.WYOdUC9Z29FVbVUDNlnhHQ?rs=1&pid=ImgDetMain", // Replace with generic laptop image
      price: "$1,999.99",
      processor: "Intel Core i7-12700H", // Add additional specs
      graphics_card: "NVIDIA RTX 3070 Ti",
      ram: "16GB DDR5",
      storage: "1TB PCIe NVMe SSD",
      total_rating: "4.5",
      total_review: "4",
    },
    {
      id: 2,
      title: "Ultraportable Productivity Laptop",
      image:
        "https://th.bing.com/th/id/OIP.CpFNzQ4y93HZLPIPdaXk-gHaFj?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with generic laptop image
      price: "$899.99",
      processor: "AMD Ryzen 7 6800U",
      graphics_card: "Integrated Radeon Graphics",
      ram: "8GB DDR4",
      storage: "512GB NVMe SSD",
      total_rating: "4",
      total_review: "24",
    },
    {
      id: 3,
      title: "Content Creation Workstation Laptop",
      image:
        "https://th.bing.com/th/id/OIP.nEPgozNxk9OIOeWgPYe2HgHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with generic laptop image
      price: "$2,499.99",
      processor: "Intel Core i9-12900HK",
      graphics_card: "NVIDIA RTX 3080",
      ram: "32GB DDR5",
      storage: "2TB PCIe NVMe SSD",
      total_rating: "4.5",
      total_review: "45",
    },
    // Add more laptops with different specs and images
    {
      id: 4,
      title: "Budget-Friendly Chromebook",
      image:
        "https://th.bing.com/th/id/R.399b53a0fc39ef1005ac7fe01442ca71?rik=ZYnMN2wpXZKr5g&riu=http%3a%2f%2fwww.slashgear.com%2fwp-content%2fuploads%2f2016%2f01%2fhp-chromebook-11-g4-ee-4.jpg&ehk=XQSdB%2b%2b2oVFHodtk2A2fjzJN3yvnO5tO0F1ZgZboQ%2f4%3d&risl=&pid=ImgRaw&r=0", // Replace with generic laptop image
      price: "$399.99",
      processor: "Intel Celeron N4020",
      graphics_card: "Integrated Intel UHD Graphics",
      ram: "4GB LPDDR4",
      storage: "128GB eMMC",
      total_rating: "3.5",
      total_review: "34",
    },
    {
      id: 5,
      title: "Gaming Laptop with VR Capabilities",
      image:
        "https://th.bing.com/th/id/R.94ca722132a63b697d33b6ec32195c66?rik=voHUnmacGnshKg&riu=http%3a%2f%2fwww.gamergirlgamerboy.com%2fwp-content%2fuploads%2f2018%2f07%2flenovo-legion-y920.jpg&ehk=WKSEJRej9LWDK9SaLUclmW951tgItAWUon4uaqbdc%2bU%3d&risl=&pid=ImgRaw&r=0", // Replace with generic laptop image
      price: "$3,499.99",
      processor: "Intel Core i9-12900HX",
      graphics_card: "NVIDIA RTX 3080 Ti",
      ram: "64GB DDR5",
      storage: "4TB PCIe NVMe SSD",
      total_rating: "3.5",
      total_review: "46",
    },
    {
      id: 6,
      title: "Thin and Light Everyday Laptop",
      image: "https://cdn.mos.cms.futurecdn.net/Pei2YxhhsEfE3hWPueVnUH.jpg", // Replace with generic laptop image
      price: "$699.99",
      processor: "AMD Ryzen 5 5600U",
      graphics_card: "Integrated Radeon Graphics",
      ram: "16GB DDR4",
      storage: "512GB PCIe NVMe SSD",
      total_rating: "5",
      total_review: "14",
    },
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
                            <Box>{"- " + curvedTV.processor}</Box>
                            <Box>{"- " + curvedTV.graphics_card}</Box>
                            <Box>{"- " + curvedTV.ram}</Box>
                            <Box>{"- " + curvedTV.storage}</Box>
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
                            <Box>{"- " + curvedTV.processor}</Box>
                            <Box>{"- " + curvedTV.graphics_card}</Box>
                            <Box>{"- " + curvedTV.ram}</Box>
                            <Box>{"- " + curvedTV.storage}</Box>
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
                            <Box>{"- " + curvedTV.title}</Box>
                            <Box>{"- " + curvedTV.processor}</Box>
                            <Box>{"- " + curvedTV.graphics_card}</Box>
                            <Box>{"- " + curvedTV.ram}</Box>
                            <Box>{"- " + curvedTV.storage}</Box>
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

export default ComputerLaptops;
