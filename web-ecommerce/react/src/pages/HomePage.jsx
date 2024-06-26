import { Box } from "@mui/material";
import PageComponent from "../components/PageComponent";
import BannerPage from "../components/BannerPage";

const homepage = () => {
  return (
    <Box>
      <PageComponent title="Home">
        <BannerPage />
      </PageComponent>
    </Box>
  );
};

export default homepage;
