"use client";
import HeroTitle from "@/components/hero-title";
import PhotoSwiper from "@/components/swiper";
import { Box, Flex } from "@chakra-ui/react";

export default function Home({ params }) {
  return (
    <Box width="full" height="100vh">
      <Flex w="full" h="full" position="absolute">
        <HeroTitle />
      </Flex>

      <PhotoSwiper />
    </Box>
  );
}
