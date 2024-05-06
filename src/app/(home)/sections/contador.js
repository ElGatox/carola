"";

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("@/components/contador"), {
  ssr: false,
});

const Contador = () => {
  const targetDate = new Date("2024-11-28T00:00:00");
  return (
    <Box>
      <Countdown targetDate={targetDate} />
    </Box>
  );
};

export default Contador;
