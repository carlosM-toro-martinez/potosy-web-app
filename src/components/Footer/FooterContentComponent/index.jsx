import React from "react";
import { useStyles } from "./FooterContent.styles";
import { Typography, Link, Box } from "@material-ui/core";
import encuentra from "../../../assets/logos/8.png";
import SocialNetworksComponent from "../SocialNetworksComponent";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FooterContentComponent() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.spaceBetween}>
        <Box className={`${classes.flexCol} ${classes.mt2}`}>
          <img
            src={encuentra}
            alt="Encuentra!"
            width={200}
            className={classes.logo}
          />
          <Typography variant="body1" className={classes.title}>
            {t("followUs")}
          </Typography>
          <Box className={classes.iconContainer}>
            <SocialNetworksComponent
              face="https://www.facebook.com/profile.php?id=100087789513331"
              wpp="https://wa.me/+59178635209/"
              inst="https://www.instagram.com/encuentrapotosi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              tube="https://wa.me/+59178635209/"
              twit="https://wa.me/+59178635209/"
            />
          </Box>
        </Box>
        <LinksOfInterest classes={classes} />
        <MoreInfo classes={classes} />
        <ContactUs classes={classes} />
      </Box>
    </Box>
  );
}

const LinksOfInterest = ({ classes }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(`/${route}`);
  };
  return (
    <Box className={classes.flexCol}>
      <Typography variant="h6" className={classes.title}>
        {t("interestLinks")}
      </Typography>
      <ul className={`${classes.list} ${classes.mt2}`}>
        <li onClick={() => handleRoute("section/1")}>
          <Link className={classes.primaryText}>{t("list")}</Link>
        </li>
        <li onClick={() => handleRoute("about")}>
          <Link className={classes.primaryText}>{t("about")}</Link>
        </li>
        <li onClick={() => handleRoute("chutillos")}>
          <Link className={classes.primaryText}>Chutillos</Link>
        </li>
        <li onClick={() => handleRoute("routes")}>
          <Link className={classes.primaryText}>{t("touristRoute")}</Link>
        </li>
        <li onClick={() => handleRoute("login")}>
          <Link className={classes.primaryText}>{t("login")}</Link>
        </li>
      </ul>
    </Box>
  );
};

const MoreInfo = ({ classes }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(`/${route}`);
  };
  return (
    <Box className={classes.flexCol}>
      <Typography variant="h6" className={classes.title}>
        {t("knowMore")}
      </Typography>
      <ul className={`${classes.list} ${classes.mt2}`}>
        <li onClick={() => handleRoute("section/1")}>
          <Link className={classes.primaryText}>{t("museums")}</Link>
        </li>
        <li onClick={() => handleRoute("section/21")}>
          <Link className={classes.primaryText}>{t("stores")}</Link>
        </li>
        <li onClick={() => handleRoute("section/3")}>
          <Link className={classes.primaryText}>{t("didYouKnow")}</Link>
        </li>
        <li onClick={() => handleRoute("section/22")}>
          <Link className={classes.primaryText}>{t("stations")}</Link>
        </li>
      </ul>
    </Box>
  );
};

const ContactUs = ({ classes }) => {
  const { t } = useTranslation();
  return (
    <Box className={classes.flexCol}>
      <Typography variant="h6" className={classes.title}>
        {t("contacts")}
      </Typography>
      <Typography variant="body1" className={classes.mt2}>
        {t("mail")}:
      </Typography>
      <Typography variant="body" className={classes.primaryText}>
        encuentra.po@gmail.com
      </Typography>
      <Typography variant="body1" className={classes.mt2}>
        {t("phoneNumber")}:
      </Typography>
      <Typography variant="body" className={classes.primaryText}>
        +59178635209
      </Typography>
    </Box>
  );
};

export default FooterContentComponent;
