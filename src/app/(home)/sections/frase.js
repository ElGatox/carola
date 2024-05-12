"";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";

const Frase = () => {
  return (
    <Flex
      bg="#f3f2eb"
      pt={["2rem", null, null, "4rem"]}
      justifyContent="space-evenly"
      h="50vh"
      w="full"
    >
      <VStack>
        <Text
          textAlign="center"
          maxW={["350px", null, null, "550px"]}
          fontSize="2.5em !important"
          variant="title"
        >
          &quot;Los momentos más felices y divertidos de la vida se tornan más
          lindos cuando los compartimos con familiares y amigos. &quot;
        </Text>
        <Text textAlign="center" maxW="200px">
          Carola
        </Text>
      </VStack>
    </Flex>
  );
};

export default Frase;
