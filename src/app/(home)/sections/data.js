"";
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";

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
        <Flex
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          borderColor="#b89819"
          w="150px"
          h="150px"
          borderRadius="100%"
        >
          {" "}
          <Image w="90%" src="/images/location_icon.svg" alt="mapa" />
        </Flex>

        <Text textColor="#b89819" fontSize="2.5em !important" variant="title">
          Mis 15
        </Text>
        <Text textAlign="center" maxW="200px">
          ¡Te espero el Domingo 28 de Noviembre en Nebraska Eventos para
          festejar juntos este gran momento!{" "}
        </Text>
      </VStack>
      <VStack>
        <Flex
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          borderColor="#b89819"
          w="150px"
          h="150px"
          borderRadius="100%"
        >
          {" "}
          <Image src="/images/cute_clock.svg" alt="mapa" />
        </Flex>
        <Text textColor="#b89819" fontSize="2.5em !important" variant="title">
          Horario
        </Text>
        <Text textAlign="center" maxW="200px">
          La fiesta comienza a las 21:00 hs. Te pedimos por favor que seas
          puntual.
        </Text>
      </VStack>
      <VStack>
        <Flex
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          borderColor="#b89819"
          w="150px"
          h="150px"
          borderRadius="100%"
        >
          {" "}
          <Image pt="2rem" w="90%" src="/images/dress_code.svg" alt="mapa" />
        </Flex>
        <Text textColor="#b89819" fontSize="2.5em !important" variant="title">
          Dress Code
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
