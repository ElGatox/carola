import React from "react";
import Ticker from "framer-motion-ticker";
import { Flex, Text, Box } from "@chakra-ui/react";

function TickerOpcion() {
  const words = [
    "Proximamente",
    "Proximamente",
    "Proximamente",
    "Proximamente",
    "Proximamente",
  ];
  return (
    <Box>
      <Ticker duration={40}>
        {words.map((item, index) => (
          <Flex bg="#FFAA80" w="full" gap="50px" key={index}>
            <Text pl="20px"> {item} </Text>
          </Flex>
        ))}
      </Ticker>
    </Box>
  );
}
export default TickerOpcion;
