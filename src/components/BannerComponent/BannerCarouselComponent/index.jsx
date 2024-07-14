import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import plaza from "../../../assets/images/plaza.webp";
import chutillos from "../../../assets/images/chutillos.jpg";
import naturaleza from "../../../assets/images/image-1703070193351.jpg";
import salar from "../../../assets/images/salar.jpg";
import noche from "../../../assets/images/noche.jpg";
import { useStyles } from "./bannerCarousel.styles";

export default function BannerCarouselComponent() {
  const classes = useStyles();
  const images = [plaza, chutillos, naturaleza, salar, noche];

  return (
    <div id="app" className={classes.app}>
      <Swiper
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
        }}
        modules={[EffectCards, Autoplay]}
        className={classes.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={classes.swiperSlide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={classes.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
