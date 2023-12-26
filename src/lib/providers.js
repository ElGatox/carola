"use client";
import Lenify from "@/components/lenis";
import { theme } from "@/styles/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

export function Providers({ children }) {
  return (
    <Lenify>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </Lenify>
  );
}

import * as React from "react";

export function LenisProvider({ children, options, ...props }) {
  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  );
}
