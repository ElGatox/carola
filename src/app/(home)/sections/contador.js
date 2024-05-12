"";

import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import TickerDivider from "@/components/ticker/ticker-divider";
import TickerOpcion from "@/components/ticker/ticker-opcion";

const Countdown = dynamic(() => import("@/components/contador"), {
  ssr: false,
});

const Contador = () => {
  const targetDate = new Date("2024-11-28T00:00:00");
  return (
    <Box>
      {/* <TickerDivider body="Proximamente" direction="left" /> */}
      <Box borderTop="1px solid #b89819">
        <TickerOpcion />
      </Box>
      <Countdown targetDate={targetDate} />
      <Box borderBottom="1px solid #b89819">
        <TickerOpcion />
      </Box>
    </Box>
  );
};

export default Contador;
