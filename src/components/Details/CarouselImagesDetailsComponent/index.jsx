import { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
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
    <div className={classes.containerWrap} >
      <ImageGallery
        items={imagesFormat}
        showFullscreenButton={!random ? true : false}
        showPlayButton={true}
        showThumbnails={!isFullScreen}
        renderItem={(item) => {
          return (
            <>
              {!isFullScreen ? <div className={classes.container}>
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
            <div>
              <img
                src={item.thumbnail}
                alt={item.description}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
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