import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useStyles } from './slider.styles';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import potosi1 from '../../../../assets/images/1potosi.jpg';
import potosi2 from '../../../../assets/images/2potosi.jpg';
import potosi3 from '../../../../assets/images/3potosi.jpg';
import potosi4 from '../../../../assets/images/4potosi.jpg';

function SliderComponent() {
  //const classes = useStyles();

  return (
    <div className="center">
      <div className="wrapper">
        <div className="container">
          <Swiper
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
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide style={{ flexDirection: 'column' }}>
              <img src={potosi1} alt="slide_image" />
              <p className='title'>hoola</p>
            </SwiperSlide>
            <SwiperSlide style={{ flexDirection: 'column' }}>
              <img src={potosi2} alt="slide_image" />
              <p className='title' >hoola</p>
            </SwiperSlide>
            <SwiperSlide style={{ flexDirection: 'column' }}>
              <img src={potosi4} alt="slide_image" />
              <p className='title'>hoola</p>
            </SwiperSlide>
            <SwiperSlide style={{ flexDirection: 'column' }}>
              <img src={potosi1} alt="slide_image" />
              <p className='title'>hoola</p>
            </SwiperSlide>
            <SwiperSlide style={{ flexDirection: 'column' }}>
              <img src={potosi3} alt="slide_image" />
              <p className='title'>hoola</p>
            </SwiperSlide>
            <SwiperSlide style={{ flexDirection: 'column' }}>
              <img src={potosi2} alt="slide_image" />
              <p className='title' >hoola</p>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;