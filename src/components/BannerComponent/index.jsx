import React, { useContext, useState } from "react";
import { useStyles } from "./bannerComponent.styles.js";
import { Typography } from "@material-ui/core";
import { Slide, Zoom } from "@mui/material";
import conexion from "../../assets/icons/conexion.png";
import location from "../../assets/icons/location.png";
import traveler from "../../assets/icons/traveler.png";
import remember from "../../assets/icons/remember.png";
import phoneGirl from "../../assets/images/phoneGirl.jpeg";
import logoEncuentra from "../../assets/images/logoEncuentra.png";
import disfruta from "../../assets/images/disfruta.jpg";
import friendsSalar from "../../assets/images/friendsSalar.jpg";
import BannerCarouselComponent from "./BannerCarouselComponent/index.jsx";

function BannerComponent({ children }) {
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
            Encuentra{" "}
            <span
              style={{
                color: "#FF4500",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              Potosi
            </span>
          </Typography>
        </div>
        <div className={classes.shadow}>
          <Zoom in={true} timeout={200}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  backgroundImage: `url(${phoneGirl})`,
                  width: "14rem",
                  height: "17rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: ".5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "rotate(-5deg)",
                  marginTop: "-10rem",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Conectate
                </Typography>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "70px",
                    bottom: 0,
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "-1.5rem",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={conexion}
                    alt=""
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "65px",
                    }}
                  />
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom in={true} timeout={400}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  backgroundImage: `url(${logoEncuentra})`,
                  width: "14rem",
                  height: "17rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: ".5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "rotate(5deg)",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Encuentra
                </Typography>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "70px",
                    bottom: 0,
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "-1.5rem",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={location}
                    alt=""
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom in={true} timeout={600}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  backgroundImage: `url(${disfruta})`,
                  width: "14rem",
                  height: "17rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: ".5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "rotate(-5deg)",
                  marginTop: "-10rem",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Disfruta
                </Typography>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "70px",
                    bottom: 0,
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "-1.5rem",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={traveler}
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom in={true} timeout={800}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  backgroundImage: `url(${friendsSalar})`,
                  width: "14rem",
                  height: "17rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: ".5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "rotate(5deg)",
                }}
              >
                <Typography variant="h4" className={classes.title}>
                  Recuerda
                </Typography>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "70px",
                    bottom: 0,
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "-1.5rem",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={remember}
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "100%",
                    }}
                  />
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
