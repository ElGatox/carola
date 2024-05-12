"";
import { Box, Flex, VStack, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const TeEspero = () => {
  return (
    <Flex
      bg="#b89819"
      pt={["0", null, null, "4rem"]}
      alignItems="center"
      justifyContent={["center", null, null, "space-evenly"]}
      h={["60vh", null, null, "40vh"]}
      w="full"
    >
      <VStack>
        <Text
          color="white"
          textAlign="center"
          maxW="550px"
          fontSize="4.5em !important"
          variant="title"
        >
          Te Espero
        </Text>
        <Text
          maxW={["350px", null, null, "full"]}
          color="white"
          fontSize={["1.1rem", null, null, "1.5rem"]}
          textAlign="center"
        >
          Para que formes parte de esta gran celebración. ¡Confirma tu
          asistencia!
        </Text>
        <Box pt="2rem">
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-RpxNjUpbyZbBaOATfuNoAi-pUni-GY0Zj7tFPOsG2C5SeA/viewform?usp=sf_link"
          >
            <Button> CONFIRMAR ASISTENCIA </Button>
          </Link>
        </Box>
      </VStack>
    </Flex>
  );
};

export default TeEspero;
