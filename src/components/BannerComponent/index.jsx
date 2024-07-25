import React, { useRef, useState } from "react";
import { useStyles } from "./bannerComponent.styles.js";
import { Button, Typography } from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import conexion from "../../assets/icons/conexion.png";
import location from "../../assets/icons/location.png";
import traveler from "../../assets/icons/traveler.png";
import remember from "../../assets/icons/remember.png";
import phoneGirl from "../../assets/images/phoneGirl.jpeg";
import logoEncuentra from "../../assets/images/logoEncuentra.png";
import disfruta from "../../assets/images/disfruta.jpg";
import friendsSalar from "../../assets/images/friendsSalar.jpg";
import catedral from "../../assets/images/5potosi.jpg";
import moneda from "../../assets/images/moneda.jpg";
import salar from "../../assets/images/salar.jpg";
import cerro from "../../assets/images/cerro.jpg";
import map from "../../assets/icons/conexion.svg";
import { Divider, Slide, Zoom } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useOnScreen from "../../hocks/useOnScreen";

function BannerComponent() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const classes = useStyles();

  const images = [
    {
      original: catedral,
      thumbnail: catedral,
    },
    {
      original: moneda,
      thumbnail: moneda,
    },
    {
      original: salar,
      thumbnail: salar,
    },
    {
      original: cerro,
      thumbnail: cerro,
    },
  ];

  const navigate = useNavigate();

  const handleLink = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className={classes.containerStyle}>
        <div className={classes.containerTitle}>
          <Slide in={true} timeout={800}>
            <Typography variant="h4">
              Encuentra <span className={classes.titleHighlight}>Potosi</span>
            </Typography>
          </Slide>
          <Slide in={true} timeout={800}>
            <Typography variant="h3">
              Conectate, Encuentra y Disfruta
            </Typography>
          </Slide>
        </div>
        <ImageGallery
          items={images}
          autoPlay={true}
          infinite={true}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          showBullets={false}
          showNav={true}
          renderItem={(item) => {
            return (
              <div
                className={classes.background}
                style={{ backgroundImage: `url(${item.original})` }}
              >
                <div className={classes.backgroundImage}></div>
              </div>
            );
          }}
        />
      </div>
      <div className={classes.shadow} ref={ref}>
        <Slide direction="right" in={isVisible} timeout={600}>
          <div>
            <div
              style={{
                displa: "flex",
                flexDirection: "column",
                height: "78vh",
                width: "30rem",
                marginBottom: "2rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Zoom in={true} timeout={200}>
                <Typography style={{ textAlign: "center" }} variant="h3">
                  potosi.encuentra.lat
                </Typography>
              </Zoom>
              <Zoom in={true} timeout={200}>
                <Typography variant="body" className={classes.subTitle}>
                  Un espacio donde poder encontrar todo lo que necesites en esta
                  hermosa ciudad
                </Typography>
              </Zoom>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2rem",
                  marginTop: "1rem",
                }}
              >
                <img src={map} width={250} />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FF4500" }}
                  onClick={() => handleLink("section/1")}
                >
                  <Typography
                    variant="body"
                    style={{ textTransform: "capitalize", color: "white" }}
                  >
                    Encontrar !
                  </Typography>
                </Button>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left" in={isVisible} timeout={600}>
          <div>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
              <Zoom in={true} timeout={200}>
                <div className={classes.imageContainer}>
                  <div
                    className={classes.imageCard}
                    style={{
                      backgroundImage: `url(${phoneGirl})`,
                      //transform: "rotate(-5deg)",
                    }}
                  >
                    <Typography variant="h4" className={classes.title}>
                      Conectate
                    </Typography>
                    <div className={classes.iconContainer}>
                      <img
                        src={conexion}
                        alt=""
                        className={classes.iconImage}
                      />
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
                      //transform: "rotate(5deg)",
                      //marginBottom: "3rem",
                    }}
                  >
                    <Typography variant="h4" className={classes.title}>
                      Encuentra
                    </Typography>
                    <div className={classes.iconContainer}>
                      <img
                        src={location}
                        alt=""
                        className={classes.iconImage}
                      />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <Zoom in={true} timeout={600}>
                <div className={classes.imageContainer}>
                  <div
                    className={classes.imageCard}
                    style={{
                      backgroundImage: `url(${disfruta})`,
                      //transform: "rotate(-5deg)",
                    }}
                  >
                    <Typography variant="h4" className={classes.title}>
                      Disfruta
                    </Typography>
                    <div className={classes.iconContainer}>
                      <img
                        src={traveler}
                        alt=""
                        className={classes.iconImage}
                      />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </Slide>
      </div>
      <Divider />
    </>
  );
}

export default BannerComponent;
