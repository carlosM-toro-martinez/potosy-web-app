import React from "react";
import { useStyles } from "./MisionEncuentra.styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import tech from "../../../assets/images/tech.jpg";
import techHumanity from "../../../assets/images/techHumanity.jpg";
import techTourism from "../../../assets/images/techTourism.jpg";
import logoPhone from "../../../assets/logos/4.png";
import logoDesktop from "../../../assets/logos/8.png";
import cerro from "../../../assets/images/cerro.jpg";
import { useTranslation } from "react-i18next";

function MisionEncuentraComponent() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        item
        xs={10}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "3rem",
        }}
      >
        <img src={logoPhone} alt="Encuentra!" width={"300px"} />
      </Grid>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} md={5} className={classes.containerText}>
          <Typography variant="h4" className={classes.title}>
            {t("greeting")}
          </Typography>
          <Typography variant="body" className={classes.paragraph}>
            {t("welcome")}
          </Typography>
          <Typography variant="body" className={classes.paragraph}>
            {t("vision")}
          </Typography>
        </Grid>
        <Grid item xs={10} md={5} className={classes.imageContainer}>
          <Box className={classes.imageBox}>
            <img src={tech} alt="imagen1" className={classes.image} />
            <img src={techHumanity} alt="imagen2" className={classes.image} />
          </Box>
          <Box className={classes.imageBox}>
            <img src={techTourism} alt="imagen3" className={classes.image} />
            <img src={cerro} alt="imagen4" className={classes.image} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default MisionEncuentraComponent;
