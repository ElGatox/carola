"";

import InViewAnimation from "@/components/animations/in-view";
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

const EventData = () => {
  return (
    <Flex
      pb={["2rem", null, null, "0"]}
      flexDirection={["column", null, null, "row"]}
      pt="7rem"
      justifyContent={["space-between", null, null, "space-evenly"]}
      h={["full", null, null, "60vh"]}
      w="full"
      gap="1rem"
    >
      <VStack>
        <Flex
          zIndex="700"
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          borderColor="#f3c2ea"
          w="150px"
          h="150px"
          borderRadius="100%"
        >
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Nebraska+Eventos+Exclusivos/@-32.9416504,-60.6966106,17z/data=!3m1!4b1!4m6!3m5!1s0x95b7ad3b2e1fdb1f:0xabd48dc966638be0!8m2!3d-32.9416504!4d-60.6940357!16s%2Fg%2F11qpssbx5g?entry=ttu"
          >
            {" "}
            <InViewAnimation
              effect="opacity"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <Image w="100%" src="/images/location_icon.svg" alt="mapa" />
            </InViewAnimation>
          </Link>
        </Flex>

        <InViewAnimation
          effect="fadeInUp"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Text textColor="#f3c2ea" fontSize="2.5em !important" variant="title">
            Mis 15
          </Text>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInUp"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Text textAlign="center" maxW="200px">
            ¡Te espero el Jueves 28 de Noviembre en Nebraska Eventos para
            festejar juntos este gran momento!{" "}
          </Text>
        </InViewAnimation>
      </VStack>

      <VStack>
        <InViewAnimation
          effect="opacity"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            border="1px solid"
            borderColor="#f3c2ea"
            w="150px"
            h="150px"
            borderRadius="100%"
          >
            {" "}
            <Image src="/images/cute_clock.svg" alt="mapa" />
          </Flex>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInUp"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Text textColor="#f3c2ea" fontSize="2.5em !important" variant="title">
            Horario
          </Text>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInUp"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Text textAlign="center" maxW="200px">
            La fiesta comienza a las 21:00 hs. Te pedimos por favor que seas
            puntual.
          </Text>
        </InViewAnimation>
      </VStack>

      <VStack>
        <InViewAnimation
          effect="opacity"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            border="1px solid"
            borderColor="#f3c2ea"
            w="150px"
            h="150px"
            borderRadius="100%"
          >
            {" "}
            <Image pt="2rem" w="90%" src="/images/dress_code.svg" alt="mapa" />
          </Flex>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInUp"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Text textColor="#f3c2ea" fontSize="2.5em !important" variant="title">
            Dress Code
          </Text>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInUp"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <Text textAlign="center" maxW="200px">
            Formal.
          </Text>
        </InViewAnimation>
      </VStack>
    </Flex>
  );
};

export default EventData;
