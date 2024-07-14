import ImageGallery from "react-image-gallery";
import { useStyles } from "./CarouselFooter.styles";
function CarouselFooterComponent({ images }) {
  const classes = useStyles();
  return (
    <div className={classes.containerStyle}>
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
            <div className={classes.containerImage}>
              <img src={item} alt="carrusel" className={classes.image} />
            </div>
          );
        }}
      />
    </div>
  );
}

export default CarouselFooterComponent;
