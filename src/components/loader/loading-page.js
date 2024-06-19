"use client";
import { useLoadingPage } from "./loader.js";
import { Box, Text, Image, Flex, Center } from "@chakra-ui/react";

export default function LoadingPage({ children }) {
  const { show, percentOfCharge } = useLoadingPage();

  if (!show) return children;

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" bg="#b5e6ed">
      <Image
        justifyContent="center"
        alignItems="center"
        alt="loader"
        src="https://i.pinimg.com/originals/93/dd/8a/93dd8a26a1706b30a2e8f314e096d129.gif"
      />
    </Flex>
  );
}
