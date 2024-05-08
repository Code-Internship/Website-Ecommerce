import { Box } from "@mui/material";
import PageComponent from "../components/PageComponent";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <Box>
      <PageComponent>
        {/** code ben trong nay */}

        {/** code ben trong nay */}
        <Box>
          <Link
            to="/"
            className="font-semibold leading-6 text-dark hover:text-indigo-900 "
          >
            Go Home
          </Link>
        </Box>
      </PageComponent>
    </Box>
  );
};

export default ProductDetail;
