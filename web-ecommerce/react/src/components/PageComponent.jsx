import { Box } from "@mui/material";

const PageComponent = ({ title, buttons = "", children }) => {
  return (
    <Box>
      <header className="bg-white shadow">
        <Box className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          {buttons}
        </Box>
      </header>
      <main>
        <Box className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</Box>
      </main>
    </Box>
  );
};

export default PageComponent;
