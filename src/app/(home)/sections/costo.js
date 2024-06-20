"";
import InViewAnimation from "@/components/animations/in-view";
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";

const Costo = () => {
  return (
    <Box pt="4rem">
      <InViewAnimation
        effect="fadeInDown"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Flex
          margin="0"
          position="relative"
          bg="#f3c2ea"
          flexDirection="column"
          w="full"
          h="55vh"
          px="1rem"
        >
          <Box
            top={["46%", null, null, "46%"]}
            left={["38%", null, null, "45%"]}
            position="absolute"
          >
            <Text textColor="white" variant="title" fontSize="2em !important">
              {" "}
              Costo Tarjeta
            </Text>{" "}
          </Box>
          <Box w="full">
            <Flex
              borderRadius="full"
              w={["92%", null, null, "98%"]}
              position="absolute"
              top="-4%"
              h="200px"
              bg="#84b6f4"
              alignItems="center"
              justifyContent="center"
              pt="2rem"
              flexDirection="column"
            >
              <Text
                pb="2rem"
                textColor="white"
                fontSize={["2rem", null, null, "4rem"]}
              >
                Menores: $2.000
              </Text>
            </Flex>
            <Flex
              borderRadius="full"
              position="absolute"
              bottom="-4%"
              w={["92%", null, null, "98%"]}
              h="200px"
              bg="#84b6f4"
              alignItems="center"
              justifyContent="center"
              pt={["1rem", null, null, "0"]}
              flexDirection="column"
            >
              <Text fontSize={["2rem", null, null, "4rem"]} textColor="white">
                Mayores: $18.000
              </Text>
              <Text
                textColor="white"
                textAlign="center"
                maxW={["260px", null, null, "full"]}
              >
                (Hasta el 20 de agosto, posteriormente costara $25.000)
              </Text>
            </Flex>
          </Box>
        </Flex>
      </InViewAnimation>
    </Box>
  );
};

export default Costo;
