import React, { useState } from "react";
import { useStyles } from "./bannerComponent.styles.js";
import { Typography } from "@material-ui/core";
import { Zoom } from "@mui/material";
import conexion from "../../assets/icons/conexion.png";
import location from "../../assets/icons/location.png";
import traveler from "../../assets/icons/traveler.png";
import remember from "../../assets/icons/remember.png";
import phoneGirl from "../../assets/images/phoneGirl.jpeg";
import logoEncuentra from "../../assets/images/logoEncuentra.png";
import disfruta from "../../assets/images/disfruta.jpg";
import friendsSalar from "../../assets/images/friendsSalar.jpg";

function BannerComponent() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.containerStyle} />
      <div className={classes.backgroundImage}>
        <div className={classes.containerTitle}>
          <Typography variant="h4" className={classes.title}>
            Encuentra <span className={classes.titleHighlight}>Potosi</span>
          </Typography>
        </div>
        <div className={classes.shadow}>
          <Zoom in={true} timeout={200}>
            <div className={classes.imageContainer}>
              <div
                className={classes.imageCard}
                style={{
                  backgroundImage: `url(${phoneGirl})`,
                  transform: "rotate(-5deg)",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Conectate
                </Typography>
                <div className={classes.iconContainer}>
                  <img src={conexion} alt="" className={classes.iconImage} />
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom in={true} timeout={400}>
            <div className={classes.imageContainer}>
              <div
                className={classes.imageCard}
                style={{
                  backgroundImage: `url(${logoEncuentra})`,
                  transform: "rotate(5deg)",
                  marginBottom: "-3rem",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Encuentra
                </Typography>
                <div className={classes.iconContainer}>
                  <img
                    src={location}
                    alt=""
                    className={classes.iconImageLarge}
                  />
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom in={true} timeout={600}>
            <div className={classes.imageContainer}>
              <div
                className={classes.imageCard}
                style={{
                  backgroundImage: `url(${disfruta})`,
                  transform: "rotate(-5deg)",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Disfruta
                </Typography>
                <div className={classes.iconContainer}>
                  <img src={traveler} alt="" className={classes.iconImage} />
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom in={true} timeout={800}>
            <div className={classes.imageContainer}>
              <div
                className={classes.imageCard}
                style={{
                  backgroundImage: `url(${friendsSalar})`,
                  transform: "rotate(5deg)",
                  marginBottom: "-3rem",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Recuerda
                </Typography>
                <div className={classes.iconContainer}>
                  <img src={remember} alt="" className={classes.iconImage} />
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
}

export default BannerComponent;
