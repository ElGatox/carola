"use client";
import { Box, Flex } from "@chakra-ui/react";
import Home from "./sections/hero";
import EventData from "./sections/data";
import Frase from "./sections/frase";
import Contador from "./sections/contador";
import TeEspero from "./sections/te-espero";

const Invitacion = () => {
  return (
    <Box w="full">
      <Home />
      <Contador />
      <EventData />
      <Frase />
      <TeEspero />
    </Box>
  );
};

export default Invitacion;
