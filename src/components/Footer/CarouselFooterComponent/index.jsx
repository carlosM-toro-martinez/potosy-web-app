import ImageGallery from "react-image-gallery";
import potosy from "../../../assets/images/2potosi.jpg";
import unesco from "../../../assets/images/5potosi.jpg";
import a from "../../../assets/images/1.jpg";
import b from "../../../assets/images/2.jpg";

function CarouselFooterComponent({ images }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <ImageGallery
        items={images}
        autoPlay={true}
        infinite={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showBullets={true}
        showNav={false}
        renderItem={(item) => {
          return (
            <div style={{ width: "20rem", height: "40vh" }}>
              <img
                src={item}
                alt={""}
                style={{ width: "100%", height: "50vh" }}
              />
            </div>
          );
        }}
      />
    </div>
  );
}

export default CarouselFooterComponent;
