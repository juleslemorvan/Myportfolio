import { theme } from "../theme/theme";
import { createContext, useState } from "react";
import { Layout } from "../component/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";

export const AppContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const value = useState({
    routesVisited: [],
  });

  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value={value}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
