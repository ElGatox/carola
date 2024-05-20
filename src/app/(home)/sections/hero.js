"use client";
import HeroTitle from "@/components/hero-title";
import PhotoSwiper from "@/components/swiper";
import PhotoSwiperMobile from "@/components/swipermobile";
import { Box, Flex } from "@chakra-ui/react";

export default function Home({ params }) {
  return (
    <Box width="full" height="100vh">
      <Flex w="full" h="full" position="absolute">
        <HeroTitle />
      </Flex>

      <Box display={["initial", null, null, "none"]}>
        <PhotoSwiperMobile />
      </Box>
      <Box display={["none", null, null, "block"]}>
        <PhotoSwiper />
      </Box>
    </Box>
  );
}
