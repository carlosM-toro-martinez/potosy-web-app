import React, { useState, useEffect, useRef } from "react";
import { useStyles } from "./ImageTextStyles.styles";
import { Divider, Slide, Zoom } from "@mui/material";
import useOnScreen from "../../hocks/useOnScreen";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import CardReviewComponent from "./CardReviewComponent";
import cerro from "../../assets/images/cerro.jpg";
import santaTeresa from "../../assets/images/santaTeresa.jpg";
import plaza from "../../assets/images/plazaNoviembre.jpg";
import sanFrancisco from "../../assets/images/sanFrancisco.jpg";
import moneda from "../../assets/images/moneda.jpg";

const ImageTextLeft = () => {
  const classes = useStyles();
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const reviewData = [
    {
      place: "Cerro Rico",
      opinion:
        "Hay bastantes agencias donde contratar visitas a las minas del Cerro Rico, casi todas están enfrente de la Casa de la Moneda. Es preferible preguntar precios, no varían mucho pero si en cuanto al recorrido. Todas te dan el equipo necesario para visitar las minas.",
      name: "adolfo s",
      placeReviewer: "Cochabamba, Bolivia",
      date: "abril 9, 2020",
      source:
        "https://www.tripadvisor.es/Attraction_Review-g295431-d316591-Reviews-Cerro_Rico-Potosi_Potosi_Department.html#REVIEWS",
      image: cerro,
    },
    {
      place: "Convento Santa Teresa",
      opinion:
        "Una visita muy interesante no solo por la increíble riqueza de numerosas piezas que tiene este museo, pero también por las explicaciones de la guía.",
      name: "Gérard T",
      placeReviewer: "Águilas, España",
      date: "abr 2, 2019",
      source:
        "https://www.tripadvisor.es/Attraction_Review-g295431-d318886-Reviews-Santa_Teresa_Convent_Museum_Convento_Museo_Santa_Teresa-Potosi_Potosi_Department.html#REVIEWS",
      image: santaTeresa,
    },
    {
      place: "Convento San Francisco de potosí",
      opinion:
        "Para mi, junto a la Casa de la Moneda, lo más destacado en Potosí. Pagando la entrada, barata, se accede a los techos de la iglesia y desde allí se observa la maravilla de construcción colonial y una vista a 360 grados de la ciudad y el Cerro Rico. Es mágico, ajustando la vista y el sentido puede uno transportarse en el tiempo y sentir los tiempos idos, retocando las fotos tomadas desde allí, me dan ganas de volver.",
      name: "jemrcb",
      placeReviewer: "Buenos Aires, Argentina",
      date: "Noviembre, 2021",
      source:
        "https://www.tripadvisor.es/ShowUserReviews-g295431-d318888-r819442321-San_Francisco_of_Potosi_Convent_and_Temple-Potosi_Potosi_Department.html",
      image: sanFrancisco,
    },
    {
      place: "Plaza 10 de Noviembre",
      opinion:
        "Se respira Historia. Hermoso lugar para respirar un poco de Historia en la fresca mañana de Enero en el Centro Histórico de Potosí",
      name: "GJ_pu",
      placeReviewer: "Maracaibo, Venezuela",
      date: "julio de 2022",
      source:
        "https://www.tripadvisor.es/ShowUserReviews-g295431-d555124-r895154455-Plaza_10_de_Noviembre-Potosi_Potosi_Department.html",
      image: plaza,
    },
    {
      place: "Casa Nacional de Moneda",
      opinion:
        "Es un lugar genial, pero quede con gusto a poco al no permitirnos tomar fotografias en el interior, me habria gustado tener en digital algunas de las hermosas obras que se exiben.",
      name: "Hernán Briones",
      placeReviewer: "Santiago, Chile",
      date: "julio de 2022",
      source:
        "https://www.tripadvisor.es/Attraction_Review-g295431-d318885-Reviews-Casa_Nacional_de_la_Moneda-Potosi_Potosi_Department.html#REVIEWS",
      image: moneda,
    },
  ];

  return (
    <div className={classes.container} ref={ref}>
      <Divider />
      <Zoom direction="up" in={isVisible} timeout={1000}>
        <div className={classes.wrapper}>
          <h2 className={classes.h2}>Opiniones de nuestros visitantes</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className={classes.swiperOpinions}
          >
            {reviewData.map((review, index) => (
              <SwiperSlide className={classes.swiperSlideOpinions}>
                <CardReviewComponent
                  key={index}
                  place={review.place}
                  opinion={review.opinion}
                  name={review.name}
                  placeReviewer={review.placeReviewer}
                  date={review.date}
                  source={review.source}
                  image={review.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Zoom>
    </div>
  );
};

export default ImageTextLeft;
