import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BannerPage = () => {
  return (
    <Box>
      {/** Banner chinh */}
      <Box>
        <section className="relative bg-[url(https://www.harbourcity.com.hk/media/Devialet-1.jpg)] bg-cover bg-center bg-no-repeat">
          <Box className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></Box>

          <Box className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <Box className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
              <Box className="mt-4 max-w-lg sm:text-xl/relaxed text-uppercase">
                Audio And Video
              </Box>

              <Box className="text-4xl font-weight-bold text-uppercase">
                Devialet Gold PhanTom
              </Box>
              <Box className="text-4xl text-capitalize">Wireless Speaker</Box>

              <Box className="mt-7 flex flex-wrap gap-4 text-center">
                <Link
                  to="/DiscoverNow"
                  className="btn btn-outline-primary font-weight-bold"
                >
                  Discover now
                </Link>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      {/** Banner chinh */}

      {/** Banner phu */}
      <Box>
        <section>
          <Box className="mx-auto px-3 py-3">
            <Box className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Box>
                <Link to="/DiscoverNow" className="group relative block">
                  <img
                    src="https://i0.wp.com/dronedj.com/wp-content/uploads/sites/2/2020/01/Sunflower-Labs-security-drone.jpg?resize=1200,628&ssl=1"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  <Box className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white font-italic">
                    <Box className="max-w-xl text-uppercase font-weight-bold">
                      dji drone
                    </Box>
                    <Box className="text-capitalize">reality capture</Box>
                  </Box>
                </Link>
              </Box>

              <Box>
                <Link to="/DiscoverNow" className="group relative block">
                  <img
                    src="https://media.wired.com/photos/5f7e4efc340398e14d15b3c0/191:100/w_1280,c_limit/Gear-OM4-5.jpg?mbid=social_retweet"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  <Box className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white font-italic">
                    <Box className="max-w-xl text-uppercase font-weight-bold">
                      osmo mobile
                    </Box>
                    <Box className="text-capitalize">beyond smart</Box>
                  </Box>
                </Link>
              </Box>

              <Box>
                <Link to="/DiscoverNow" className="group relative block">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0553/0419/2034/files/Primary_-_Pillow_172b4716-8f5f-4220-a9a3-4d625d08e69a.jpg?v=1678993367"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  <Box className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white font-italic">
                    <Box className="max-w-xl text-uppercase font-weight-bold">
                      S3 flexible
                    </Box>
                    <Box className="text-capitalize">home speaker</Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      {/** Banner phu */}
    </Box>
  );
};

export default BannerPage;
