"";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";

const PhotoSwiper = () => {
  return (
    <Box w="full" h="full">
      <Swiper
        speed={5000}
        modules={[Autoplay]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop="true"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
      >
        <SwiperSlide>
          <Image maxH="100vh" src="/images/foto1.webp" alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image maxH="100vh" src="/images/foto2.webp" alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image maxH="100vh" src="/images/foto3.webp" alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image maxH="100vh" src="/images/foto4.webp" alt="slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <Image maxH="100vh" src="/images/foto1.webp" alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image maxH="100vh" src="/images/foto2.webp" alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image maxH="100vh" src="/images/foto3.webp" alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image maxH="100vh" src="/images/foto4.webp" alt="slide 4" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default PhotoSwiper;
