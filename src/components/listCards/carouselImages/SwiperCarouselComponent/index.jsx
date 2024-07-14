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
            spaceBetween={20}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 70,
              modifier: 0.8,
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
                  <div
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "125px",
                      position: "absolute",
                      top: 0,
                      border: "solid 2px #e0e0e0",
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      backgroundColor: "#fff",
                      boxShadow:
                        "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <img
                      src={slide.icon_url}
                      alt={slide.icon_url}
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "120px",
                      }}
                    />
                  </div>
                  <img src={slide.image_url} alt={slide.image_url} />
                  <p className="title">{slide.title}</p>
                  <p className="description">{slide.description}</p>
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
