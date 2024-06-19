"";
import { Box, Flex, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Flex
      bg="#84b6f4"
      h="4vh"
      textAlign="center"
      alignItems="center"
      w="full"
      justifyContent="center"
    >
      <Text textColor="white">
        {" "}
        Copyright © 2024 @elgatohconcamara All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
