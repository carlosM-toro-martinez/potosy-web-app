// Carousel.js
import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider1.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SectionContext } from '../../../../context/SectionContext';
function SwiperCarousel({ slidesData, listCardRef }) {
  const { setRoute, route, setSection, setDescSection, index, setIndex } = useContext(SectionContext);
  const updateData = (title, id, desc, indexSlide) => {
    setIndex(indexSlide);
    listCardRef.current.scrollIntoView({ behavior: 'smooth' });
    setRoute(title);
    setSection(id);
    setDescSection(desc);
  };
  return (
    <div className='center'>
      <div className='wrapper'>
        <div className="container">
          <Swiper
            spaceBetween={30}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            initialSlide={index}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide style={{ flexDirection: 'column' }} onClick={() => updateData(slide.title, slide.section_id, slide.description, index)}>
                <img src={slide.image_url} alt="slide_image" />
                <p className='title'>{slide.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-navigation">
          <ArrowBackIcon className="custom-swiper-button-prev" style={{ fontSize: '5rem' }} />
          <ArrowForwardIcon className="custom-swiper-button-next" style={{ fontSize: '5rem' }} />
        </div>
      </div>
    </div>
  );
}

export default SwiperCarousel;