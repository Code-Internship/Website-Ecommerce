import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BannerPage = () => {
  return (
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
            <Box className="text-4xl text-capitalize">
              Wireless Speaker
            </Box>

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
  );
};

export default BannerPage;
