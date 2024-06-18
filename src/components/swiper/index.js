"";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import HeroTitle from "../hero-title";

const PhotoSwiper = () => {
  return (
    <Box>
      <Box width="full" height="100vh">
        <Flex w="full" h="full" position="absolute">
          <HeroTitle />
        </Flex>
        <Swiper
          speed={5000}
          modules={[Autoplay]}
          slidesPerView="auto"
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
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
            <Image src="/images/vdoscaroonce.jpg" alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/vdoscaroocho.jpg" alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src="/images/vdoscarosiete.jpg" alt="slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/vdoscarodies.jpg" alt="slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/vdoscaronueve.jpg" alt="slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/vdoscaroonce.jpg" alt="slide 6" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src="/images/vdoscarosiete.jpg" alt="slide 7" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/vdoscaronueve.jpg" alt="slide 8" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default PhotoSwiper;
