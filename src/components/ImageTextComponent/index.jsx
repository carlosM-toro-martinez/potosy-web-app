import React, { useState, useEffect, useRef } from "react";
import { useStyles } from "./ImageTextStyles.styles";
import { useTheme } from "@emotion/react";
import image from "../../assets/images/1.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageTextComp = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [showAnimation, setShowAnimation] = useState(false);
  const showAnimationRef = useRef(showAnimation);
  const navigate = useNavigate();

  useEffect(() => {
    showAnimationRef.current = showAnimation;
  }, [showAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      const componentElement = document.getElementById("tuComponente1");
      if (componentElement) {
        const componentTop = componentElement.getBoundingClientRect().top;
        if (
          componentTop < window.innerHeight * 0.8 &&
          !showAnimationRef.current
        ) {
          setShowAnimation(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tourData = {
    imageUrl:
      "https://images.myguide-cdn.com/bolivia/events/large/festivity-of-chutillos-in-potosi-1425778.jpeg",
    title: "¿Sabías que?",
    description:
      "Potosí celebra con júbilo que la “Festividad de San Bartolomé y San Ignacio de Loyola Ch’utillos” fue declarada como patrimonio inmaterial de la humanidad en la XVIII SESIÓN DEL Comité intergubernamental",
    subtitle: "Tour Increible",
  };

  return (
    <div
      id="tuComponente1"
      className={`${classes.container} ${
        showAnimation ? classes.showAnimation : ""
      }`}
    >
      <div className={classes.box}>
        <div className={classes.textContainer}>
          <div
            className={`${classes.tourContainer} ${
              showAnimation ? classes.showAnimation : ""
            }`}
          >
            <div className={classes.tourImage}>
              <img src={image} alt={tourData.title} />
            </div>
            <div className={classes.tourDetails}>
              <h2 className={classes.h2}>{tourData.title}</h2>
              <p
                style={{
                  color: "#5B5B5B",
                }}
              >
                {tourData.description}
              </p>
              <Button
                variant="error"
                className={classes.customButton}
                onClick={() => navigate("/chutillos")}
                sx={{ fontWeight: "bold" }}
              >
                Ver Mas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComp;
