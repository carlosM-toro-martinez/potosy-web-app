import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./ImageTextStyles.styles";
import {
  Button,
  Card,
  CardContent,
  Fade,
  CardMedia,
  Slide,
} from "@mui/material";
import BannerCarouselComponent from "../BannerComponent/BannerCarouselComponent";
import macuquina from "../../assets/images/macuquina.jpg";
import salar from "../../assets/images/salar.jpg";
import historia from "../../assets/images/historia.jpg";
import cerro from "../../assets/images/cerro.jpg";
import route from "../../assets/icons/route.svg";
import { useNavigate } from "react-router-dom";
import useOnScreen from "../../hocks/useOnScreen";

const ImageTextComp = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [indexTour, setIndexTour] = useState(null);

  const classes = useStyles();
  const navigate = useNavigate();
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const handleViewMore = () => {
    navigate("section/1");
  };

  const handleButtonClick = (tour, index) => {
    setSelectedTour(tour);
    setIndexTour(index);
  };

  const tourData = [
    {
      image: historia,
      titulo: "Historia de Potosí",
      descripcion:
        "La Villa Imperial de Potosí y la icónica montaña de plata que la corona, llamada Sumaj Urku o 'Hermosa Montaña' en quechua y en español Cerro Rico, en un tiempo alojó una de las ciudades más grandes del mundo, complejos industriales y minas de plata. Adaptando técnicas desarrolladas en México, los expertos de Potosí y los trabajadores andinos mezclaban el mineral pulverizado con sal y mercurio en grandes contenedores al aire libre. La introducción del método de amalgamación con mercurio hizo que Potosi creciera a una escala nunca antes vista en la historia mundial. Al virrey Francisco de Toledo (1569-1580) se le atribuye y se le culpa con razón por esta transformación radical. La pintura de Mendizábal ilustra el vasto sistema de reservorios y canales implementado bajo el gobierno del virrey Toledo.",
      fuente:
        "https://flacso.edu.ec/laglobal/es/gabinete/artificialia-es/la-villa-imperial-de-potosi-por-francisco-j-mendizabal/",
    },
    {
      image: macuquina,

      titulo: "Macuquinas",
      descripcion:
        "Las macuquinas se fabrican de 1575 a 1775. Se conoce con este nombre a las de bordes recortados y sellados en cospeles irregulares a golpe de martillo. Deriva de la voz quechua “makkaikuna” que quiere decir 'las golpeadas'. Las macuquinas tuvieron dos clases la de escudo y cruz de Jerusalén (Felipe IV) 1670-1652, y la de cruz y columnas de Hércules (Felipé Iv a Carlos II) 1653-3773. En los dos periodos se sellaron monedas en los valores de 8,4,2,1 y 1/2 reales. Las iniciales más frecuentes de ensayadores son la V en todos sus valores y en monedas de 8 reales la E. ",
      fuente:
        "https://www.casanacionaldemoneda.bo/boletin/template/pdfs/ceca.pdf",
    },
    {
      image: cerro,
      titulo: "A 4.000 metros",
      descripcion:
        "A una altura de más de 4.000 metros (13.000 pies) en los Andes bolivianos, Potosí es una de las ciudades más altas del mundo. Más alto todavía es el contiguo Cerro Rico. La ciudad y esta montaña cercana también son conocidas por su larga relación con la plata. Los mineros comenzaron a extraer el mineral de plata de la montaña desde el siglo XVI, proporcionando una legendaria fuente para la moneda del imperio español. En ese momento, la mina se consideraba el mayor complejo industrial del mundo y suministraba la mayor cantidad de la plata, creando una fuente de riqueza que ayudó a dar forma a una economía global.",
      fuente:
        "https://www.casanacionaldemoneda.bo/boletin/template/pdfs/ceca.pdf",
    },
    {
      image: salar,
      titulo: "Salar de Uyuni",
      descripcion:
        "El Salar de Uyuni es uno de los lugares más espectaculares de América del Sur. La enorme extensión de sal blanca y reluciente se extiende a lo largo de 10.582 kilómetros del Altiplano y puede verse incluso desde el espacio. Las capas de sal se intercalan entre depósitos sedimentarios que alcanzan una gran profundidad de 10 m en el centro de la llanura. Se estima que aquí hay 10 mil millones de toneladas de sal en total. Sin embargo, para los locales el verdadero tesoro se encuentra debajo del salar, donde se encuentra aproximadamente el 70% de las reservas mundiales de litio. Toda una industria se ha dedicado a la extracción de este metal ligero que se encarga de dar vida a laptops, smartphones y autos eléctricos.",
      fuente: "https://www.salardeuyuni.com/es/informacion/",
    },
  ];

  useEffect(() => {
    setSelectedTour(tourData[0]);
    setIndexTour(0);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container} ref={ref}>
        <Slide direction="right" in={isVisible} timeout={600}>
          <div className={classes.carouselContainer}>
            {/* <BannerCarouselComponent /> */}
            {selectedTour ? (
              <Card className={classes.card}>
                <CardMedia
                  sx={{
                    height: 250,
                    width: 400,
                    borderRadius: ".5rem",
                    marginTop: "1rem",
                  }}
                  image={`${selectedTour.image}`}
                  title={`${selectedTour.titulo}`}
                />
                <CardContent sx={{ width: "100%" }}>
                  <p className={classes.title}>{selectedTour.titulo}</p>
                  <p className={classes.description}>
                    {selectedTour.descripcion}
                  </p>
                  <a
                    href={selectedTour.fuente}
                    target="_blank"
                    className={classes.font}
                  >
                    <Button
                      variant="contained"
                      className={classes.closeButton}
                      sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "#fff",
                        },
                      }}
                    >
                      Fuente
                    </Button>
                  </a>
                  <Button
                    variant="contained"
                    className={classes.closeButton}
                    onClick={handleViewMore}
                    sx={{
                      backgroundColor: "#CC3700",
                      "&:hover": {
                        backgroundColor: "#CC3700",
                      },
                    }}
                  >
                    Encuentra Más
                  </Button>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </Slide>
        <Slide direction="left" in={isVisible} timeout={600}>
          <div className={classes.dataContainer}>
            <h2 className={classes.h2}>¿Por Qué visitar Potosí?</h2>
            <div className={classes.buttonContainer}>
              {tourData.map((tour, index) => (
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(tour, index)}
                  className={classes.button}
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    backgroundColor: indexTour === index ? "#CC3700" : "#fff",
                    color: indexTour === index ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: indexTour === index ? "#CC3700" : "#fff",
                    },
                  }}
                >
                  {tour.titulo}
                </Button>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
              }}
            >
              <img src={route} width={400} />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ImageTextComp;
