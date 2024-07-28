import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useStyles } from "./chutillosComponent.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

function ChutillosComponent() {
  const { t } = useTranslation();
  const videoId = "Nd1ROm0bXcg?si=TBvYhvQl_Ix_WMok";
  const classes = useStyles();
  const imageNumbers = Array.from({ length: 7 }, (_, i) => i + 1);
  return (
    <Box className={classes.container}>
      <Paper elevation={8}>
        <div className={classes.box}>
          <Box className={classes.textContainer}>
            <Typography variant="h4">{t("chutillosTitle")}</Typography>
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
              <Typography variant="h5">{t("chutillos")}</Typography>
              <Typography variant="h6">{t("chutillosDesc1")}</Typography>
              <Typography variant="h6">{t("chutillosDesc2")}</Typography>
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
