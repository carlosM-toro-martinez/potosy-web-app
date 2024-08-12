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
import chutillos from "../../assets/images/chutillos2.jpg";
import mascaron from "../../assets/images/mascaron.jpg";
import route from "../../assets/icons/route.svg";
import { useNavigate } from "react-router-dom";
import useOnScreen from "../../hocks/useOnScreen";
import { useTranslation } from "react-i18next";

const ImageTextComp = () => {
  const { t, i18n } = useTranslation();
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
      title_en: "History of Potosí",
      description_en:
        "The Imperial Villa of Potosí and the iconic silver mountain that crowns it, called Sumaj Urku or 'Beautiful Mountain' in Quechua and in Spanish Cerro Rico, once housed one of the largest cities in the world, industrial complexes, and silver mines. Adapting techniques developed in Mexico, Potosí experts and Andean workers mixed the pulverized mineral with salt and mercury in large open containers. The introduction of the mercury amalgamation method made Potosi grow on a scale never seen before in world history. Viceroy Francisco de Toledo (1569-1580) is rightly credited and blamed for this radical transformation. Mendizábal's painting illustrates the vast system of reservoirs and canals implemented under Viceroy Toledo's government.",
    },
    {
      image: macuquina,
      titulo: "Macuquinas",
      descripcion:
        "Las macuquinas se fabrican de 1575 a 1775. Se conoce con este nombre a las de bordes recortados y sellados en cospeles irregulares a golpe de martillo. Deriva de la voz quechua “makkaikuna” que quiere decir 'las golpeadas'. Las macuquinas tuvieron dos clases la de escudo y cruz de Jerusalén (Felipe IV) 1670-1652, y la de cruz y columnas de Hércules (Felipé Iv a Carlos II) 1653-3773. En los dos periodos se sellaron monedas en los valores de 8,4,2,1 y 1/2 reales. Las iniciales más frecuentes de ensayadores son la V en todos sus valores y en monedas de 8 reales la E.",
      fuente:
        "https://www.casanacionaldemoneda.bo/boletin/template/pdfs/ceca.pdf",
      title_en: "Macuquinas",
      description_en:
        "Macuquinas were made from 1575 to 1775. This name is known for those with trimmed edges and stamped on irregular planchets with a hammer blow. It derives from the Quechua word 'makkaikuna', which means 'the beaten ones'. Macuquinas had two types: the shield and Jerusalem cross (Philip IV) 1670-1652, and the cross and columns of Hercules (Philip IV to Charles II) 1653-3773. In both periods, coins were minted in the values of 8, 4, 2, 1, and 1/2 reales. The most frequent assayer initials are V in all values and in 8-real coins E.",
    },
    {
      image: cerro,
      titulo: "A 4.000 metros",
      descripcion:
        "A una altura de más de 4.000 metros (13.000 pies) en los Andes bolivianos, Potosí es una de las ciudades más altas del mundo. Más alto todavía es el contiguo Cerro Rico. La ciudad y esta montaña cercana también son conocidas por su larga relación con la plata. Los mineros comenzaron a extraer el mineral de plata de la montaña desde el siglo XVI, proporcionando una legendaria fuente para la moneda del imperio español. En ese momento, la mina se consideraba el mayor complejo industrial del mundo y suministraba la mayor cantidad de la plata, creando una fuente de riqueza que ayudó a dar forma a una economía global.",
      fuente:
        "https://www.casanacionaldemoneda.bo/boletin/template/pdfs/ceca.pdf",
      title_en: "At 4,000 meters",
      description_en:
        "At an altitude of over 4,000 meters (13,000 feet) in the Bolivian Andes, Potosí is one of the highest cities in the world. Even higher is the nearby Cerro Rico. The city and this nearby mountain are also known for their long relationship with silver. Miners began extracting silver ore from the mountain in the 16th century, providing a legendary source for the Spanish Empire's currency. At that time, the mine was considered the largest industrial complex in the world and supplied the most silver, creating a source of wealth that helped shape a global economy.",
    },
    {
      image: salar,
      titulo: "Salar de Uyuni",
      descripcion:
        "El Salar de Uyuni es uno de los lugares más espectaculares de América del Sur. La enorme extensión de sal blanca y reluciente se extiende a lo largo de 10.582 kilómetros del Altiplano y puede verse incluso desde el espacio. Las capas de sal se intercalan entre depósitos sedimentarios que alcanzan una gran profundidad de 10 m en el centro de la llanura. Se estima que aquí hay 10 mil millones de toneladas de sal en total. Sin embargo, para los locales el verdadero tesoro se encuentra debajo del salar, donde se encuentra aproximadamente el 70% de las reservas mundiales de litio. Toda una industria se ha dedicado a la extracción de este metal ligero que se encarga de dar vida a laptops, smartphones y autos eléctricos.",
      fuente: "https://www.salardeuyuni.com/es/informacion/",
      title_en: "Salar de Uyuni",
      description_en:
        "The Salar de Uyuni is one of the most spectacular places in South America. The vast expanse of white, glistening salt stretches over 10,582 kilometers of the Altiplano and can even be seen from space. The salt layers are interspersed with sedimentary deposits that reach a great depth of 10 meters in the center of the plain. It is estimated that there are 10 billion tons of salt in total here. However, for the locals, the true treasure lies beneath the salt flat, where approximately 70% of the world's lithium reserves are found. An entire industry has been dedicated to the extraction of this lightweight metal that powers laptops, smartphones, and electric cars.",
    },
    {
      image: chutillos,
      titulo: "Ch'utillos",
      descripcion:
        "La fiesta de Ch’utillos (San Bartolomé y San Ignacio de Loyola) se celebra en agosto en Potosí, Bolivia. Parte integral de la identidad cultural local, se caracteriza por ferias gastronómicas, espectáculos de danza y una procesión hasta el santuario ubicado en la garganta de Mullu Punku, un sitio natural compuesto por formaciones rocosas. En la ciudad, feligreses y grupos musicales participan en el desfile de danzas autóctonas y populares de Ch’utillos, al que se unen comunidades rurales luciendo sus trajes tradicionales. Algunos vienen de ciudades vecinas de Argentina y recorren hasta 200 kilómetros para llegar a Potosí y participar en el desfile de danzas con sus propias tradiciones y expresiones orales. Grupos de danza de otros países de América Latina también se suman a las festividades, convirtiendo las calles de Potosí en una plataforma de intercambio cultural. Otros portadores son los fabricantes de instrumentos musicales tradicionales, ropa, accesorios y vajilla. Los conocimientos y habilidades de Ch’utillos se transmiten de manera informal, oralmente y participando en las festividades. Símbolo de fe y tradición, la fiesta de Ch’utillos es parte del patrimonio cultural de la nación indígena Q’ara Q’aras. Marca el comienzo de la preparación de la tierra y de un nuevo ciclo agrícola, con ofrendas a Pachamama (la Madre Tierra).",
      fuente:
        "https://ich.unesco.org/es/RL/ch-utillos-fiesta-de-san-bartolome-y-san-ignacio-de-loyola-encuentro-de-culturas-en-potosi-01958",
      title_en: "Ch'utillos",
      description_en:
        "The festival of Ch'utillos (Saint Bartholomew and Saint Ignatius of Loyola) is celebrated in August in Potosí, Bolivia. An integral part of the local cultural identity, it is characterized by food fairs, dance performances and a procession to the sanctuary located in the Mullu Punku gorge, a natural site made up of rock formations. In the city, parishioners and musical groups participate in the parade of native and popular dances of Ch'utillos, which is joined by rural communities wearing their traditional costumes. Some come from neighboring cities in Argentina and travel up to 200 kilometers to reach Potosí and participate in the dance parade with their own traditions and oral expressions. Dance groups from other Latin American countries also join the festivities, turning the streets of Potosí into a platform for cultural exchange. Other carriers are manufacturers of traditional musical instruments, clothing, accessories and tableware. The knowledge and skills of Ch'utillos are transmitted informally, orally and by participating in the festivities. A symbol of faith and tradition, the Ch'utillos festival is part of the cultural heritage of the Q'ara Q'aras indigenous nation. It marks the beginning of the preparation of the land and a new agricultural cycle, with offerings to Pachamama (Mother Earth).",
    },
    {
      image: mascaron,
      titulo: "Mascaron casa de moneda",
      descripcion:
        "La bienvenida a quienes llegan hasta la Casa Nacional de Moneda la da el personaje que se encuentra hacia el segundo patio, sobre él ha sido muy difícil brindar una versión definitiva acerca de su significado. Sin embargo dentro, de las diversas interpretaciones se pueden consignar las siguientes: Dios Baco, Deidad de los indígenas, Rostro de Diego Huallpa, Burla a la codicia. Dentro de esos análisis, hay quienes se atreven a afirmar que el autor fue instrumento de fuerzas superiores y del destino para representar el rostro de la raza indígena con los pómulos abultados, la frente estrecha, los ojos rasgados, la nariz recta y el cabello largo y oscuro. La corona de uvas que ostenta, en varias culturas es símbolo de riqueza espiritual y por lo tanto sería la representación indígena. La sonrisa irónica podría significar una burla a los conquistadores, quienes jactándose de su religiosidad demostraron con sus actos estar lejos de la religiosidad espiritual de los Andes. Lo cierto es que fue tallado en 1856 por Eujenio Mulon, tallador francés quien trabajo en la Casa Nacional de Moneda gravando troqueles, punzones y matrices para sellar monedas y medallas conmemorativas.",
      fuente: "https://www.casanacionaldemoneda.bo/mascaron.html",
      title_en: "Mascaron mint",
      description_en:
        "The welcome to those who arrive at the National Mint is given by the character who is towards the second patio; it has been very difficult to provide a definitive version about its meaning. However, within the various interpretations the following can be recorded: God Bacchus, Deity of the indigenous people, Face of Diego Huallpa, Mockery of greed. Within these analyses, there are those who dare to affirm that the author was an instrument of higher forces and destiny to represent the face of the indigenous race with bulging cheekbones, narrow forehead, slanted eyes, straight nose and long hair. and dark. The crown of grapes that it displays, in several cultures, is a symbol of spiritual wealth and therefore would be the indigenous representation. The ironic smile could mean a mockery of the conquerors, who, by boasting about their religiosity, demonstrated with their actions that they were far from the spiritual religiosity of the Andes. The truth is that it was carved in 1856 by Eujenio Mulon, a French carver who worked at the National Mint engraving dies, punches and matrices to seal coins and commemorative medals.",
    },
    {
      image: cerro,
      titulo: "mayor mina de plata",
      descripcion:
        "Se dice que con todo el metal extraído de la mina de Potosí, se podría construir un puente de plata desde los Andes a España. Sin embargo, también se cuenta que los mares del mundo podrían teñirse de rojo con la sangre derramada por los indígenas que murieron en las duras condiciones de trabajo del Cerro Rico. Desde luego, la plata de América supone un elemento clave a la par que controvertido para entender la historia de España y del mundo durante los siglos modernos.",
      fuente: "https://www.muyinteresante.com/historia/36565.html",
      title_en: "largest silver mine",
      description_en:
        "It is said that with all the metal extracted from the Potosí mine, a silver bridge could be built from the Andes to Spain. However, it is also said that the seas of the world could be dyed red with the blood shed by the indigenous people who died in the harsh working conditions of Cerro Rico. Of course, American silver is a key as well as controversial element in understanding the history of Spain and the world during modern centuries.",
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
                  title={`${
                    i18n.language === "en"
                      ? selectedTour.title_en
                      : selectedTour.titulo
                  }`}
                />
                <CardContent sx={{ width: "100%" }}>
                  <p className={classes.title}>
                    {i18n.language === "en"
                      ? selectedTour.title_en
                      : selectedTour.titulo}
                  </p>
                  <p className={classes.description}>
                    {i18n.language === "en"
                      ? selectedTour.description_en
                      : selectedTour.descripcion}
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
                    {t("moreFind")}
                  </Button>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </Slide>
        <Slide direction="left" in={isVisible} timeout={600}>
          <div className={classes.dataContainer}>
            <h2 className={classes.h2}>{t("whyVisit")}</h2>
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
                  {i18n.language === "en" ? tour.title_en : tour.titulo}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => handleViewMore()}
                className={classes.button}
                sx={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                {t("more")}...
              </Button>
            </div>
            <div className={classes.imageContainer}>
              <img src={route} className={classes.image} />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ImageTextComp;
