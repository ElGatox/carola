"";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";

const EventData = () => {
  return (
    <Flex
      pb={["2rem", null, null, "0"]}
      flexDirection={["column", null, null, "row"]}
      pt="4rem"
      justifyContent={["space-between", null, null, "space-evenly"]}
      h={["full", null, null, "50vh"]}
      w="full"
      gap="1rem"
    >
      <VStack>
        <Box
          border="1px solid"
          borderColor="#8c94ce"
          w="150px"
          h="150px"
          borderRadius="100%"
        />
        <Text fontSize="2.5em !important" variant="title">
          Mis 15
        </Text>
        <Text textAlign="center" maxW="200px">
          ¡Te espero el Sábado 14 de Diciembre en Salones Puerto Norte para
          festejar juntos este gran momento!{" "}
        </Text>
      </VStack>
      <VStack>
        <Box
          border="1px solid "
          borderColor="#8c94ce"
          w="150px"
          h="150px"
          borderRadius="100%"
        />
        <Text fontSize="2.5em !important" variant="title">
          HORARIO
        </Text>
        <Text textAlign="center" maxW="200px">
          La fiesta comienza a las 21:00 hs. Te pedimos por favor que seas
          puntual.
        </Text>
      </VStack>
      <VStack>
        <Box
          border="1px solid "
          borderColor="#8c94ce"
          w="150px"
          h="150px"
          borderRadius="100%"
        />
        <Text fontSize="2.5em !important" variant="title">
          DRESS CODE
        </Text>
        <Text textAlign="center" maxW="200px">
          La fiesta comienza a las 21:00 hs. Te pedimos por favor que seas
          puntual.
        </Text>
      </VStack>
    </Flex>
  );
};

export default EventData;
