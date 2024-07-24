// Carousel.js
import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider1.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useParams } from "react-router-dom";
import { SectionContext } from "../../../../context/SectionContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function SwiperCarousel({ slidesData, listCardRef }) {
  const { id } = useParams();
  const idParam = id;
  const { setRoute, route, setSection, setDescSection, index, setIndex } =
    useContext(SectionContext);
  const navigate = useNavigate();
  const updateData = (title, id, desc, indexSlide) => {
    if (!idParam) {
      navigate(`/section/${id}`);
    }
    setIndex(indexSlide);
    listCardRef.current.scrollIntoView({ behavior: "smooth" });
    setRoute(title);
    setSection(id);
    setDescSection(desc);
  };
  return (
    <div className="center">
      <div className="wrapper">
        <div className="container">
          <Swiper
            spaceBetween={60}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 70,
              modifier: 0.5,
            }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            initialSlide={index}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide
                style={{
                  flexDirection: "column",
                }}
                className="swiper-slide-container"
              >
                <div
                  className="card-container"
                  onClick={() =>
                    updateData(
                      slide.title,
                      slide.section_id,
                      slide.description,
                      index
                    )
                  }
                >
                  {/* <div className="image-container">
                    <img src={slide.icon_url} alt={slide.icon_url} />
                  </div> */}
                  <img src={slide.image_url} alt={slide.image_url} />
                  <p className="title">{slide.title}</p>
                  <p className="description">{slide.description}</p>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff4500",
                      marginBottom: "1rem",
                      "&:hover": {
                        backgroundColor: "#ff4500",
                      },
                    }}
                    className="button-view-more"
                  >
                    Ver Mas
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-navigation">
          <ArrowBackIcon
            className="custom-swiper-button-prev"
            style={{ fontSize: "5rem" }}
          />
          <ArrowForwardIcon
            className="custom-swiper-button-next"
            style={{ fontSize: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SwiperCarousel;
