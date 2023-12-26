"use client";
import { useLoadingPage } from "./loader.js";
import { Box, Text } from "@chakra-ui/react";

export default function LoadingPage({ children }) {
  const { show, percentOfCharge } = useLoadingPage();

  if (!show) return children;

  return (
    <Box style={{ display: show ? "block" : "none" }}>
      <Text>Loading... {percentOfCharge}%</Text>
    </Box>
  );
}
