"";
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";

const PhotoSwiperMobile = () => {
  return (
    <Box maxH="100vh" h="100vh">
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
          <Image src="/images/carolabyn1.jpg" alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carolabyn2.jpg" alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="/images/carolabyn3.jpg" alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carolabyn4.jpg" alt="slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carolabyn5.jpg" alt="slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carolabyn2.jpg" alt="slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="/images/carolabyn3.jpg" alt="slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/carolabyn1.jpg" alt="slide 8" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default PhotoSwiperMobile;
