import React from "react";
import { useStyles } from "./About.styles.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import TerminalIcon from "@mui/icons-material/Terminal";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const AboutComponent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div style={{ marginBottom: "2rem" }}>
        <Typography variant="h3">
          Conozca <span style={{ color: "#FF4500" }}>Encuentra!</span>
        </Typography>
        <Typography variant="body" style={{ color: "#FF4500" }}>
          Software Solutions
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoCard
            icon={
              <TerminalIcon
                sx={{ fontSize: "4rem" }}
                className={classes.icon}
              />
            }
            title="Qué hacemos"
            description="Ofrecemos soluciones de software innovadoras y flexibles para abordar los desafíos tecnológicos de su empresa."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard
            icon={
              <PeopleIcon sx={{ fontSize: "4rem" }} className={classes.icon} />
            }
            title="Cómo lo hacemos"
            description="Una sinergia de metodologías ágiles, colaboración con tus equipos y equipos de desarrollo altamente capacitados."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard
            icon={
              <CheckCircleOutlineIcon
                sx={{ fontSize: "4rem" }}
                className={classes.icon}
              />
            }
            title="Lo que nos diferencia"
            description="Ofrecemos lo mejor en ingeniería de software, invirtiendo primero en nuestra gente."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const InfoCard = ({ icon, title, description }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <div>{icon}</div>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body">{description}</Typography>
    </Paper>
  );
};

export default AboutComponent;
