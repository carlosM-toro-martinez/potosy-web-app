import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useStyles } from "./chutillosComponent.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

function ChutillosComponent() {
  const videoId = "Nd1ROm0bXcg?si=TBvYhvQl_Ix_WMok";
  const classes = useStyles();
  const imageNumbers = Array.from({ length: 7 }, (_, i) => i + 1);
  return (
    <Box className={classes.container}>
      <Paper elevation={8}>
        <div className={classes.box}>
          <Box className={classes.textContainer}>
            <Typography variant="h4">Chutillos la fiesta grande</Typography>
            <Box className={classes.newBox}>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                initialSlide={3}
                pagination={true}
                autoplay={{
                  delay: 2500,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className={classes.swiper}
              >
                {imageNumbers.map((number) => (
                  <SwiperSlide key={number} className={classes.swiperContiner}>
                    <img
                      src={require(`../../assets/images/${number}.jpg`)}
                      className={classes.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Box className={classes.textWrapper}>
              <Typography variant="h5">
                Ch’utilos, patrimonio cultural e inmaterial de la humanidad.
              </Typography>
              <Typography variant="h6">
                Potosí celebra con júbilo que la “Festividad de San Bartolomé y
                San Ignacio de Loyola Ch’utillos” fue declarada como patrimonio
                inmaterial de la humanidad en la XVIII SESIÓN DEL Comité
                intergubernamental para la Salvaguarda del Patrimonio Cultural e
                Inmaterial de la UNESCO (Organización de las Naciones Unidas
                para la Educación, la Ciencia y la Cultura, que se desarrolló el
                Botsuana el 6 de diciembre.
              </Typography>
              <Typography variant="h6">
                Ya sea con la ritualidad, la muestra de la cultura potosina en
                repostería, gastronomía, usos y costumbres, la festividad de
                Ch’utillos tiene elementos religiosos, como la visita al
                santuario de La Puerta, donde están las imágenes de San
                Bartolomé y San Ignacio de Loyola, mientras en la capital se
                desarrollan las entradas autóctonas y folclóricas a finales del
                mes de agosto.
              </Typography>
            </Box>
            <div>
              <iframe
                height="315"
                className={classes.video}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Box>
        </div>
      </Paper>
    </Box>
  );
}

export default ChutillosComponent;
