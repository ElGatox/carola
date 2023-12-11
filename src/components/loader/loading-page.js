import { useLoadingPage } from "./loader.js";
import { Box, Text } from "@chakra-ui/react";

function LoadingPage() {
  const { show, percentOfCharge } = useLoadingPage();

  return (
    <Box style={{ display: show ? "block" : "none" }}>
      <Text>Loading... {percentOfCharge}%</Text>
    </Box>
  );
}

export default LoadingPage;
