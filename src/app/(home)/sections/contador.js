"";

import { Box, Text, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import TickerDivider from "@/components/ticker/ticker-divider";
import TickerOpcion from "@/components/ticker/ticker-opcion";

const Countdown = dynamic(() => import("@/components/contador"), {
  ssr: false,
});

const Contador = () => {
  const targetDate = new Date("2024-11-28T00:00:00");
  return (
    <Flex flexDirection="column" w="full">
      {/* <TickerDivider body="Proximamente" direction="left" /> */}
      <Box borderTop="1px solid #b89819">
        <TickerOpcion />
      </Box>
      <Box w="full">
        <Countdown targetDate={targetDate} />
      </Box>
      <Box borderBottom="1px solid #b89819">
        <TickerOpcion />
      </Box>
    </Flex>
  );
};

export default Contador;
