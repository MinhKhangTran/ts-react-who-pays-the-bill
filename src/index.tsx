import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { MyProvider } from "./context/context";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider resetCSS>
    <MyProvider>
      <App />
    </MyProvider>
  </ChakraProvider>,

  rootElement
);
