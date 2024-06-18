"";

import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import InViewAnimation from "../animations/in-view";

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
      <InViewAnimation
        effect="fadeInUp"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Flex maxW="600px" alignItems="center" justifyContent="center" w="full">
          <Image w="40%" src="/images/corona.svg" alt="corona" />
        </Flex>
      </InViewAnimation>

      <InViewAnimation
        effect="fadeInUp"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.1,
        }}
      >
        <Text
          fontSize="20px !important"
          pl="0.75rem"
          variant="body"
          textColor="white"
          fontWeight="bold"
        >
          Mis 15
        </Text>
      </InViewAnimation>

      <InViewAnimation
        effect="fadeInUp"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Text variant="title" textColor="#f3c2ea" fontSize="100px">
          Carola
        </Text>
      </InViewAnimation>

      <Flex justifyContent="center" alignItems="center">
        <Box w="75px">
          <InViewAnimation
            effect="fadeInLeft"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Text textAlign="center" variant="body" textColor="#f3c2ea">
              Nov
            </Text>
          </InViewAnimation>
        </Box>
        <InViewAnimation
          effect="opacity"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <Box
            w="75px"
            borderRight="2px solid white"
            borderLeft="2px solid white"
          >
            <Text
              textAlign="center"
              variant="body"
              fontSize="50px !important"
              textColor="white"
            >
              28
            </Text>
          </Box>
        </InViewAnimation>
        <Box w="75px">
          <InViewAnimation
            effect="fadeInRight"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Text textAlign="center" variant="body" textColor="#f3c2ea">
              2024
            </Text>
          </InViewAnimation>
        </Box>
      </Flex>
      <InViewAnimation
        effect="fadeInUp"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Box pt="7rem">
          <Button w="150px" color="white" bg="#84b6f4">
            <Text variant="button">VER INFORMACION</Text>
          </Button>
        </Box>
      </InViewAnimation>
    </Flex>
  );
};

export default HeroTitle;
