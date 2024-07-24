import React, { useRef } from "react";
import BannerComponent from "../../components/BannerComponent";
//import CarouselImagesComponent from '../../components/carouselImages'
import ListCard from "../../components/listCards";
import NavBar from "../../components/navBar";

function Home() {
  const listCardRef = useRef(null);
  return (
    <>
      <NavBar />
      <BannerComponent />
      {/* <ListCard listCardRef={listCardRef} ref={listCardRef} /> */}
    </>
  );
}

export default Home;
