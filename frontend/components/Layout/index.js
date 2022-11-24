import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
