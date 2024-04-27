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
                    src="https://www.bing.com/images/blob?bcid=r0bI.rnh2PUGKQ"
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
                    src="https://www.bing.com/images/blob?bcid=r-f3AMqWq.UGeA"
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
                    src="https://www.bing.com/images/blob?bcid=rzE4cQSsCvUGrA"
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
