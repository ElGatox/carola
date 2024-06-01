"";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import HeroTitle from "../hero-title";

const PhotoSwiperMobile = () => {
  return (
    <Box maxH="100vh" h="100vh">
      <Box width="full" height="100vh">
        <Flex w="full" h="full" position="absolute">
          <HeroTitle />
        </Flex>

        <Swiper
          speed={5000}
          modules={[Autoplay]}
          slidesPerView={1}
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
            <Image src="/images/cari1byb.jpg" alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/cari2byb.jpg" alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src="/images/cari3byb.jpg" alt="slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/cari4byb.jpg" alt="slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/cari5byb.jpg" alt="slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/cari6byb.jpg" alt="slide 6" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src="/images/cari3byb.jpg" alt="slide 7" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/cari5byb.jpg" alt="slide 8" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default PhotoSwiperMobile;
