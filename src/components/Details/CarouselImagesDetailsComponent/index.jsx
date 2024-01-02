import { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css'
import { useStyles } from './CarouselImgDetails.styles';
import ImageGallery from "react-image-gallery";

function CarouselImagesDetailsComponent({ images, random }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const classes = useStyles();
  const handleScreen = () => {
    setIsFullScreen(!isFullScreen)
  }
  const imagesFormat = images.map((image) => ({
    original: random ? image : image.image_url,
    thumbnail: random ? image : image.image_url,
  }));
  return (
    <div className={!random ? classes.containerWrap : classes.containerWrapFooter} >
      <ImageGallery
        items={imagesFormat}
        showFullscreenButton={!random ? true : false}
        showPlayButton={true}
        showThumbnails={!isFullScreen}
        renderItem={(item) => {
          return (
            <>
              {!isFullScreen ?
                <div className=
                  {!random ? classes.container : classes.containerFooter}>
                  <img
                    src={item.original}
                    alt={item.description}
                    style={{ width: random ? '100%' : 'auto', height: '100%' }}
                  />
                </div> :
                <img
                  src={item.original}
                  alt={item.description}
                  style={{ width: '70%', height: 'auto' }}
                />
              }
            </>
          );
        }}
        renderThumbInner={(item) => {
          return (
            <div style={{ width: '70px', height: '50px' }}>
              <img
                src={item.thumbnail}
                alt={item.description}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          );
        }}
        onScreenChange={handleScreen}
      />
    </div>
  );
}

export default CarouselImagesDetailsComponent;