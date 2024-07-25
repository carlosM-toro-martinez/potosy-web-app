import React from "react";
import { useStyles } from "./AboutUs.styles.js";
import AboutComponent from "./AboutComponent/index.jsx";
import MisionEncuentraComponent from "./MisionEncuentraComponent/index.jsx";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div>
      <MisionEncuentraComponent />
      <AboutComponent />
    </div>
  );
};

export default AboutUs;
