"";
import InViewAnimation from "@/components/animations/in-view";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";

const Frase = () => {
  return (
    <Flex
      alignItems="center"
      bg="#f3f2eb"
      pt={["2rem", null, null, "4rem"]}
      justifyContent={["space-evenly", null, null, "center"]}
      h="50vh"
      w="full"
    >
      <VStack>
        <InViewAnimation
          effect="fadeInDown"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <Text
            textColor="#84b6f4"
            textAlign="center"
            maxW={["350px", null, null, "550px"]}
            fontSize="2.5em !important"
            variant="title"
          >
            &quot;Los momentos más felices y divertidos de la vida se tornan más
            lindos cuando los compartimos con familiares y amigos. &quot;
          </Text>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInDown"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Text
            variant="title"
            fontSize="30px !important"
            textAlign="center"
            maxW="200px"
            textColor="#84b6f4"
          >
            Caru
          </Text>
        </InViewAnimation>
      </VStack>
    </Flex>
  );
};

export default Frase;
