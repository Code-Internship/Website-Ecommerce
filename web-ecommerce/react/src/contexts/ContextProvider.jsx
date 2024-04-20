import { Box } from "@mui/material";
import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [currenUser, setCurrenUser] = useState({});
  const [userToken, setUserToken] = useState(null);

  return (
    <Box>
      <StateContext.Provider
        value={{
          currenUser,
          setCurrenUser,
          userToken,
          setUserToken,
        }}
      >
        {children}
      </StateContext.Provider>
    </Box>
  );
};

export const userStateContext = ()=> useContext(StateContext)

export default ContextProvider;
