"";

import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";

const HeroTitle = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDirection="column"
      zIndex="100"
      w="100%"
    >
      <Flex alignItems="center" justifyContent="center" w="full">
        <Image w="40%" src="/images/corona.svg" alt="corona" />
      </Flex>
      <Text
        fontSize="20px !important"
        pl="0.75rem"
        variant="body"
        textColor="white"
        fontWeight="bold"
      >
        Mis 15
      </Text>
      <Text variant="title" textColor="#b89819" fontSize="100px">
        Carola
      </Text>

      <Flex justifyContent="center" alignItems="center">
        <Box w="75px">
          <Text textAlign="center" variant="body" textColor="#b89819">
            Nov
          </Text>
        </Box>
        <Box
          w="75px"
          borderRight="2px solid white"
          borderLeft="2px solid white"
        >
          <Text
            textAlign="center"
            variant="body"
            fontSize="50px !important"
            textColor="#b89819"
          >
            28
          </Text>
        </Box>
        <Box w="75px">
          <Text textAlign="center" variant="body" textColor="#b89819">
            2024
          </Text>
        </Box>
      </Flex>
      <Box pt="7rem">
        <Button w="150px" color="white" bg="#b89819">
          <Text variant="button">VER INFORMACION</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default HeroTitle;
