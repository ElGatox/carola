"";
import InViewAnimation from "@/components/animations/in-view";
import { Box, Flex, VStack, Text, Button, Link } from "@chakra-ui/react";

const TeEspero = () => {
  return (
    <Flex
      bg="#f3c2ea"
      alignItems="center"
      justifyContent={["center", null, null, "space-evenly"]}
      h={["60vh", null, null, "50vh"]}
      w="full"
    >
      <VStack>
        <InViewAnimation
          effect="opacity"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <Text
            color="white"
            textAlign="center"
            maxW="550px"
            fontSize="4.5em !important"
            variant="title"
          >
            Te Espero
          </Text>
        </InViewAnimation>

        <InViewAnimation
          effect="opacity"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <Text
            maxW={["350px", null, null, "full"]}
            color="white"
            fontSize={["1.1rem", null, null, "1.5rem"]}
            textAlign="center"
          >
            Para que formes parte de esta gran celebración. ¡Confirma tu
            asistencia!
          </Text>
        </InViewAnimation>

        <Box pt="2rem">
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-RpxNjUpbyZbBaOATfuNoAi-pUni-GY0Zj7tFPOsG2C5SeA/viewform?usp=sf_link"
          >
            <InViewAnimation
              effect="opacity"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <Button w="150px" color="white" bg="#84b6f4">
                <Text fontWeight="bold" textColor="#white" variant="button">
                  CONFIRMAR ASISTENCIA
                </Text>
              </Button>
            </InViewAnimation>
          </Link>
        </Box>
      </VStack>
    </Flex>
  );
};

export default TeEspero;
