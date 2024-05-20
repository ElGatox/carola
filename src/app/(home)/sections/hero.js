import PhotoSwiper from "@/components/swiper";
import PhotoSwiperMobile from "@/components/swipermobile";
import { useMediaQuery } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 992px)")[0];
  const Hero = isMobile ? PhotoSwiperMobile : PhotoSwiper;
  return (
    <Box h="100vh" w="full">
      <Hero />
    </Box>
  );
};
("");

export default Home;
