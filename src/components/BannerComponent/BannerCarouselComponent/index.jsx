// import ImageGallery from "react-image-gallery";
// import potosy from "../../../assets/images/2potosi.jpg";
// import unesco from "../../../assets/images/5potosi.jpg";
// import a from "../../../assets/images/1.jpg";
// import b from "../../../assets/images/2.jpg";

// export default function BannerCarouselComponent() {
//   const images = [potosy, unesco, a, b];
//   return (
//     <ImageGallery
//       items={images}
//       autoPlay={true}
//       infinite={true}
//       showFullscreenButton={false}
//       showPlayButton={false}
//       showThumbnails={false}
//       showBullets={true}
//       showNav={false}
//       renderItem={(item) => {
//         return (
//           <div style={{ width: "100%", height: "100vh" }}>
//             <img
//               src={item}
//               alt={""}
//               style={{ width: "100%", height: "auto" }}
//             />
//           </div>
//         );
//       }}
//     />
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import potosy from "../../../assets/images/plaza.jpg";
import unesco from "../../../assets/images/moneda.jpg";
import a from "../../../assets/images/naturaleza.jpg";
import b from "../../../assets/images/hornitos.jpg";
import { useStyles } from "./bannerCarousel.styles";

export default function BannerCarouselComponent() {
  const classes = useStyles();
  const images = [potosy, unesco, a, b];

  return (
    <div id="app" className={classes.app}>
      <Swiper
        effect="cards"
        grabCursor={true}
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

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "./styles.css";
// import { EffectCards } from "swiper/modules";

// export default function BannerCarouselComponent() {
//   return (
//     <>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
