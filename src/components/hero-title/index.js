"";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

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
      <Text variant="title" textColor="white" fontSize="80px">
        CAROLA
      </Text>
      <Text pt="1rem" variant="body" textColor="white">
        Mis 15
      </Text>
      <Text variant="body" textColor="white">
        10.11.2004
      </Text>
      <Box pt="3rem">
        <Button w="150px" color="white" bg="violet">
          <Text variant="button">VER INFORMACION</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default HeroTitle;
