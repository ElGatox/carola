"use client";
import { Box, Flex } from "@chakra-ui/react";
import Home from "./sections/hero";
import EventData from "./sections/data";
import Frase from "./sections/frase";
import Contador from "./sections/contador";
import TeEspero from "./sections/te-espero";
import Footer from "./sections/footer";

const Invitacion = () => {
  return (
    <Box w="full">
      <Home />
      <Contador />
      <EventData />
      <Frase />
      <TeEspero />
      <Footer />
    </Box>
  );
};

export default Invitacion;
