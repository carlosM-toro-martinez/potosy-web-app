import React from "react";
import { useStyles } from "./MisionEncuentra.styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import tech from "../../../assets/images/tech.jpg";
import techHumanity from "../../../assets/images/techHumanity.jpg";
import techTourism from "../../../assets/images/techTourism.jpg";
import cerro from "../../../assets/images/cerro.jpg";

function MisionEncuentraComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} md={5} className={classes.containerText}>
          <Typography variant="h4" className={classes.title}>
            ¿quienes somos?
          </Typography>
          <Typography variant="body" className={classes.paragraph}>
            Somos una empresa dedicada a ofrecer soluciones de software de todo
            tipo, con el objetivo de ayudar a nuestra ciudad a beneficiarse de
            todas las ventajas que nos ofrece la tecnología y los sistemas
            informaticos. Desarrollamos proyectos que benefician a la poblacion,
            tanto económica como socialmente, demostrando que la tecnología,
            bien utilizada, puede aportar un valor moral y social
            extraordinario.
          </Typography>
          <Typography variant="body" className={classes.paragraph}>
            Creemos que la tecnología y los medios de comunicación, como las
            redes sociales, han sido mal encauzados en nuestros días. La
            comunicación y la accesibilidad que tenemos gracias a estas no se
            están aprovechando de una manera correcta. Por eso, nuestra visión
            es demostrar que la tecnología no tiene por qué quitarnos nuestra
            humanidad. Uno de nuestros principales proyectos es ENCUENTRA, que
            ayuda socialmente no solo a mostrar nuestra cultura y principales
            atractivos, sino también a proporcionar una herramienta que nos
            ayude, tanto a locales como a extranjeros, a ENCONTRAR lugares donde
            pasarla bien con las personas que amamos, crear recuerdos
            inolvidables y fortalecer los lazos que tenemos con ellos, esos
            lazos que nos hacen tan humanos y que hoy en dia esta siendo muy
            dificil crearlos.
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
