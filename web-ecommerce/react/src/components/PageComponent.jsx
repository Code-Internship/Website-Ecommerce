import { Box } from "@mui/material";
import FooterPage from "./FooterPage";

const PageComponent = ({ title, buttons = "", children }) => {
  return (
    <Box>   
       <Box className="mt-[160px]">
        <header className="bg-white shadow">
          <Box className="flex justify-between items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            {buttons}
          </Box>
        </header>
        <main>
          <Box className="mx-auto max-w px-3">{children}</Box>
        </main>
        <FooterPage />
      </Box>   
     </Box>
  );
};

export default PageComponent;
