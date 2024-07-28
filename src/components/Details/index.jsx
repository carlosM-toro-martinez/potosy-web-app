import { useStyles } from "./modal.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import MapIcon from "@mui/icons-material/Map";
import CarouselImagesDetailsComponent from "./CarouselImagesDetailsComponent";
import { useQuery } from "react-query";
import businessFindOne from "../../async/services/businessFindOneService";
import { Twitter, WhatsApp, Facebook, Instagram } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Grid,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import businessStateUpdateService from "../../async/services/put/businessStateUpdateServices";
import BreadrumbComponent from "./BreadcrumbComponent";
import { useTranslation } from "react-i18next";

const OpeningHours = ({ openinghours }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box className={classes.openingHours}>
      {!openinghours[0].morning_hours[0] == "" ? (
        <Typography variant="h3" component="h3">
          {`${t("morging")}:\n ${openinghours[0].morning_hours[0]} -  ${
            openinghours[0].morning_hours[1]
          }`}
        </Typography>
      ) : null}
      {openinghours[0].weekend ? (
        <Typography variant="h3" component="h3">
          {openinghours[0].weekend}
        </Typography>
      ) : null}
      {!openinghours[0].afternoon_hours[0] == "" ? (
        <Typography variant="h3" component="h3">
          {`${t("affternoon")}:\n ${openinghours[0].afternoon_hours[0]} - ${
            openinghours[0].afternoon_hours[1]
          }`}
        </Typography>
      ) : null}
    </Box>
  );
};

const BusinessContact = ({ data }) => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      {data.website_url ? (
        <Button
          key={"web"}
          variant="contained"
          style={{
            backgroundColor: "#2ecc71",
            marginRight: "8px",
            color: "black",
          }}
          onClick={() => handleRedirect(data.website_url)}
          startIcon={<PublicIcon />}
        >
          web
        </Button>
      ) : null}
    </Box>
  );
};

const SocialNetworks = ({ socialnetworks }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const classes = useStyles();
  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      setOpenSnackbar(true);
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const socialNetworks = [
    {
      name: "Twitter",
      icon: <Twitter />,
      color: "#1DA1F2",
      url: socialnetworks.twitter_url,
    },
    {
      name: "WhatsApp",
      icon: <WhatsApp />,
      color: "#25D366",
      url: socialnetworks.whatsapp_number
        ? `https://wa.me/+591${socialnetworks.whatsapp_number}/`
        : null,
    },
    {
      name: "Facebook",
      icon: <Facebook />,
      color: "#1877F2",
      url: socialnetworks.facebook_url,
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      color: "#E1306C",
      url: socialnetworks.instagram_url,
    },
  ];
  return (
    <Box className={classes.socialNet}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {socialNetworks.map((network) => (
          <Grid
            key={network.name}
            container
            justifyContent="center"
            alignItems="center"
            item
            xs={6}
            md={6}
          >
            <Button
              onClick={() => handleRedirect(network.url)}
              key={network.name}
              variant="contained"
              style={{ backgroundColor: network.color, marginRight: "8px" }}
              startIcon={network.icon}
            >
              {network.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="El establecimiento aún no cuenta con esa red social"
      />
    </Box>
  );
};

const Products = ({ products }) => {
  const { t } = useTranslation();
  const [showTable, setShowTable] = useState(false);

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Button
        onClick={handleToggleTable}
        sx={{ marginBottom: "1rem", color: "#FF4500" }}
      >
        {showTable ? t("seeProducts") : t("hiddenProducts")}
      </Button>
      {showTable && products[0]?.product_id ? (
        <Typography variant="h4" component="h4">
          {t("products")}
        </Typography>
      ) : null}
      {showTable && products[0]?.product_id ? (
        <Table
          sx={{
            marginBottom: "3rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                color: "black",
              }}
            >
              <TableCell sx={{ color: "black" }}>{t("detail")}</TableCell>
              <TableCell sx={{ color: "black" }}>{t("price")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products[0]?.product_id ? (
              products.map((item) => (
                <TableRow key={item.product_id} sx={{ color: "black" }}>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    {item?.product_details}
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    {item?.price}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography variant="h4">
                No extisten productos en este momento
              </Typography>
            )}
          </TableBody>
        </Table>
      ) : null}
    </Box>
  );
};

const Promotions = ({ promotions }) => {
  const { t } = useTranslation();
  const [showTable, setShowTable] = useState(false);
  const handleToggleTable = () => {
    setShowTable(!showTable);
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Button
        onClick={handleToggleTable}
        sx={{ marginBottom: "1rem", alignItems: "center", color: "#FF4500" }}
      >
        {showTable ? t("seePromotions") : t("hiddenPromotions")}
      </Button>
      {showTable && promotions[0]?.promotion_id ? (
        <Typography variant="h4" component="h4">
          {t("promotions")}
        </Typography>
      ) : null}
      {showTable && promotions[0]?.promotion_id ? (
        <Table
          sx={{
            marginBottom: "3rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                color: "black",
              }}
            >
              <TableCell sx={{ color: "black" }}>{t("detail")}</TableCell>
              <TableCell sx={{ color: "black" }}>{t("price")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {promotions[0]?.promotion_id ? (
              promotions.map((item) => (
                <TableRow key={item.promotion_id} sx={{ color: "black" }}>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    {item?.promotion_details}
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    {item?.price}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography variant="h6">
                No extisten promociones en este momento
              </Typography>
            )}
          </TableBody>
        </Table>
      ) : null}
    </Box>
  );
};

function Details() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error, refetch } = useQuery(
    `businessOne`,
    () => businessFindOne(id)
  );
  const { auth, user } = useContext(MainContext);

  const handleStateChange = async (data) => {
    try {
      const newData = { state: !data.state };
      await businessStateUpdateService(data.business_id, newData);
      navigate("/admin");
    } catch (error) {
      console.error("Error update business:", error);
    }
  };
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {!isLoading && !error ? (
        data.map((data) => (
          <div className={classes.box}>
            {state ? (
              <BreadrumbComponent
                business_name={state?.business_name}
                route={state?.route}
                idSection={state?.idSection}
              />
            ) : null}
            <Typography variant="h2" component="h2">
              {data.business_name}
            </Typography>
            <Box>
              {data?.images[0]?.image_url ? (
                <CarouselImagesDetailsComponent images={data.images} />
              ) : null}
            </Box>
            <Typography component="h3">{t("information")}</Typography>
            <OpeningHours openinghours={data.openinghours} />
            <Box className={classes.dataContainer}>
              <Box sx={{ flexDirection: "column" }}>
                {data.phone_number ? (
                  <p className={classes.infoText}>
                    {t("phoneNumber")}: {data.phone_number}
                  </p>
                ) : null}
                {data.address ? (
                  <p className={classes.infoText}>
                    {t("address")}: {data.address}
                  </p>
                ) : null}
                {data.mail ? (
                  <p className={classes.infoText}>
                    {t("mail")}
                    <EmailIcon sx={{ color: "#e74c3c" }} />: {data.mail}
                  </p>
                ) : null}
              </Box>
            </Box>

            <Box className={classes.information}>
              <Box sx={{ flex: 0.8 }}>
                <Typography component="h6">
                  {i18n.language === "en"
                    ? data.business_description_en
                    : data.business_description}
                </Typography>
              </Box>
              <Box sx={{ flex: 0.2 }}>
                <SocialNetworks socialnetworks={data.socialnetworks[0]} />
              </Box>
            </Box>
            <BusinessContact data={data} />
            <div className={classes.containerProducts}>
              <Products products={data.products} />
              <Promotions promotions={data.promotions} />
            </div>
            {auth && !user ? (
              <Button
                variant="contained"
                onClick={() => handleStateChange(data)}
              >
                {!data.state
                  ? "Agregar Establecimiento"
                  : "Quitar Establecimiento"}
              </Button>
            ) : null}
            {data.coordinates ? (
              <Link
                to={`/map`}
                state={{
                  address: data.address,
                  coordinates: data.coordinates,
                  logo_url: data.logo_url,
                  name: data.business_name,
                }}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  width: "55%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<MapIcon />}
                    sx={{
                      marginBottom: "3rem",
                      color: "white",
                      backgroundColor: "#FF4500",
                      width: "50%",
                      height: "3rem",
                      marginTop: "1rem",
                      "&:hover": {
                        backgroundColor: "#FF4500",
                      },
                    }}
                  >
                    {t("howToGet")}
                  </Button>
                </Box>
              </Link>
            ) : null}
          </div>
        ))
      ) : (
        <Typography variant="h2" component="h2">
          Cargando...
        </Typography>
      )}
    </Box>
  );
}
export default Details;
