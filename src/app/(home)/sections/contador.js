"";

import { Box, Text, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import TickerDivider from "@/components/ticker/ticker-divider";
import TickerOpcion from "@/components/ticker/ticker-opcion";
import InViewAnimation from "@/components/animations/in-view";

const Countdown = dynamic(() => import("@/components/contador"), {
  ssr: false,
});

const Contador = () => {
  const targetDate = new Date("2024-11-28T00:00:00");
  return (
    <Flex h={["100vh", null, null, "50vh"]} flexDirection="column" w="full">
      {/* <TickerDivider body="Proximamente" direction="left" /> */}
      <InViewAnimation
        effect="opacity"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Box borderTop="1px solid #ffff00">
          <TickerOpcion />
        </Box>
      </InViewAnimation>

      <InViewAnimation
        effect="opacity"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Box w="full">
          <Countdown targetDate={targetDate} />
        </Box>
      </InViewAnimation>

      <InViewAnimation
        effect="opacity"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Box borderBottom="1px solid #ffff00">
          <TickerOpcion />
        </Box>
      </InViewAnimation>
    </Flex>
  );
};

export default Contador;
