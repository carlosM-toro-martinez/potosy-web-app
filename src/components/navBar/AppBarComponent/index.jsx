import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
  useScrollTrigger,
  Slide,
  Zoom,
} from "@mui/material";
import encuentra from "../../../assets/logos/1.png";
import spain from "../../../assets/images/spain.png";
import england from "../../../assets/images/england.png";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import newsService from "../../../async/services/newsService";
import { useQuery } from "react-query";
import { MainContext } from "../../../context/MainContext";
import mq from "../../../config/mq";
import { useStyles } from "./AppBar.styles.js";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InfoIcon from "@mui/icons-material/Info";
import CelebrationIcon from "@mui/icons-material/Celebration";
import MapIcon from "@mui/icons-material/Map";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useTranslation } from "react-i18next";

function HideOnScroll(props) {
  const { children, window, threshold } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: threshold || 50,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
  threshold: PropTypes.number,
};

export default function AppBarComponent(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageAnchorEl(null);
  };
  const { data, isLoading, refetch, error } = useQuery(`newsAdmin`, () =>
    newsService()
  );
  const { setOpen, open } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null);
  const { setAuth, setToken, setUser, auth, user, setSuperAdmin } =
    React.useContext(MainContext);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLanguageMenuOpen = Boolean(languageAnchorEl);
  const isMoreMenuOpen = Boolean(moreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleMoreMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleMoreMenuClose = () => {
    setMoreAnchorEl(null);
  };

  const handleLogout = () => {
    setAuth(false);
    setToken("");
    setUser();
    setSuperAdmin(true);
  };

  const handleMenuClose = (url) => {
    if (url) {
      navigate(`/${url}`);
    }
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={() => handleMenuClose()}
    >
      <MenuItem onClick={() => handleMenuClose("login")}>
        Iniciar Sesion
      </MenuItem>
      <MenuItem onClick={() => handleLogout()}>Cerrar Sesion</MenuItem>
    </Menu>
  );
  const menuLanguageId = "primary-language-menu";

  const renderLanguageMenu = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuLanguageId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isLanguageMenuOpen}
      onClose={() => handleLanguageMenuClose()}
    >
      <MenuItem onClick={() => changeLanguage("es")}>
        <img src={spain} alt="spain" width={50} />
      </MenuItem>
      <MenuItem onClick={() => changeLanguage("en")}>
        <img src={england} alt="england" width={50} />
      </MenuItem>
    </Menu>
  );

  const menuMoreId = "primary-more-menu";

  const renderMoreMenu = (
    <Menu
      anchorEl={moreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuMoreId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMoreMenuOpen}
      onClose={handleMoreMenuClose}
    >
      <MenuItem onClick={() => handleNavigate("chutillos")}>
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#000",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Chutillos
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleNavigate("routes")}>
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#000",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {t("touristRoute")}
        </Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleLanguageMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {languageAnchorEl ? (
            <ArrowDropUpIcon sx={{ fontSize: "1.5rem" }} />
          ) : (
            <ArrowDropDownIcon sx={{ fontSize: "1.5rem" }} />
          )}
        </IconButton>
        {i18n.language === "en" && (
          <img src={england} alt="england" width={50} />
        )}
        {i18n.language === "es" && <img src={spain} alt="spain" width={50} />}
      </MenuItem>
      <MenuItem onClick={() => handleNavigate("")}>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>{t("home")}</p>
      </MenuItem>
      {!isLoading && !error && data?.length > 0 ? (
        <MenuItem onClick={() => handleNavigate("news")}>
          <IconButton size="large" color="inherit">
            <Badge
              badgeContent={!isLoading && !error ? data.length : 1}
              color="error"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>{t("newsTitle")}</p>
        </MenuItem>
      ) : null}
      <MenuItem onClick={() => handleNavigate("section/1")}>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <ListAltIcon />
          </Badge>
        </IconButton>
        <p>{t("list")}</p>
      </MenuItem>
      <MenuItem onClick={() => handleNavigate("about")}>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <InfoIcon />
          </Badge>
        </IconButton>
        <p>{t("about")}</p>
      </MenuItem>
      <MenuItem onClick={() => handleNavigate("chutillos")}>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <CelebrationIcon />
          </Badge>
        </IconButton>
        <p>Chutillos</p>
      </MenuItem>
      <MenuItem onClick={() => handleNavigate("routes")}>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <MapIcon />
          </Badge>
        </IconButton>
        <p>{t("touristRoute")}</p>
      </MenuItem>
      <MenuItem component="a" href="#footer">
        <IconButton size="large" color="inherit" href="#footer">
          <Badge color="error">
            <ContactPhoneIcon />
          </Badge>
        </IconButton>
        <p>{t("contacts")}</p>
      </MenuItem>
      <MenuItem onClick={handleMoreMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {moreAnchorEl ? (
            <ArrowDropUpIcon sx={{ fontSize: "1.5rem" }} />
          ) : (
            <ArrowDropDownIcon sx={{ fontSize: "1.5rem" }} />
          )}
        </IconButton>
        {t("more")}
      </MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  const classes = useStyles();
  const location = useLocation();
  const [appBarBackground, setAppBarBackground] = React.useState("transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50 || location.pathname !== "/") {
        setAppBarBackground("rgba(0, 0, 0, .6)");
      } else {
        setAppBarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <Box>
      <HideOnScroll {...props}>
        <AppBar
          open={open}
          sx={{
            backgroundColor:
              location.pathname !== "/"
                ? "rgba(0, 0, 0, .6)"
                : appBarBackground,
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "4rem",
              justifyContent: "space-between",
              backgroundColor:
                location.pathname !== "/"
                  ? "rgba(0, 0, 0, .6)"
                  : appBarBackground,
            }}
          >
            {auth ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="#fff"
                  onClick={handleDrawerOpen}
                  sx={{ marginLeft: "1rem" }}
                  aria-label="open drawer"
                >
                  <MenuIcon sx={{ color: "#fff" }} />
                </IconButton>
                <IconButton onClick={() => handleNavigate("")}>
                  <img
                    src={encuentra}
                    alt="encuentra"
                    width="60px"
                    style={{
                      borderRadius: "1rem",
                      hover: {
                        cursor: "pointer",
                      },
                    }}
                  />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={() => handleNavigate("")}>
                <img
                  src={encuentra}
                  alt="encuentra"
                  width="60px"
                  style={{
                    borderRadius: "1rem",
                    marginLeft: "2rem",
                    hover: {
                      cursor: "pointer",
                    },
                  }}
                />
              </IconButton>
            )}

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".1rem",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("")}
              >
                <HomeIcon sx={{ fontSize: "1.5rem" }} />

                <Typography
                  sx={{
                    fontSize: ".7rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {t("home")}
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".1rem",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("section/1")}
              >
                <ListAltIcon sx={{ fontSize: "1.5rem" }} />
                <Typography
                  sx={{
                    fontSize: ".7rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {t("list")}
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".1rem",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("about")}
              >
                <InfoIcon sx={{ fontSize: "1.5rem" }} />
                <Typography
                  sx={{
                    fontSize: ".7rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {t("about")}
                </Typography>
              </IconButton>
              {/* <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".1rem",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("chutillos")}
              >
                <CelebrationIcon sx={{ fontSize: "1.5rem" }} />
                <Typography
                  sx={{
                    fontSize: ".7rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Chutillos
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".1rem",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("routes")}
              >
                <MapIcon sx={{ fontSize: "1.5rem" }} />
                <Typography
                  sx={{
                    fontSize: ".7rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {t("touristRoute")}
                </Typography>
              </IconButton> */}
              <IconButton
                size="large"
                href="#footer"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".1rem",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
              >
                <ContactPhoneIcon sx={{ fontSize: "1.5rem" }} />
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: ".7rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {t("contacts")}
                </Typography>
              </IconButton>
              {!isLoading && !error && data?.length > 0 ? (
                <IconButton
                  size="large"
                  onClick={() => handleNavigate("news")}
                  sx={{
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    gap: ".1rem",
                    borderRadius: 0,
                    "&:hover": {
                      borderBottom: "2px solid #FF4500",
                    },
                  }}
                >
                  <Badge
                    badgeContent={!isLoading && !error ? data.length : 1}
                    color="error"
                  >
                    <NotificationsIcon sx={{ fontSize: "1.5rem" }} />
                  </Badge>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: ".7rem",
                      color: "#fff",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    {t("newsTitle")}
                  </Typography>
                </IconButton>
              ) : null}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuMoreId}
                aria-haspopup="true"
                onClick={handleMoreMenuOpen}
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".1rem",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
              >
                {moreAnchorEl ? (
                  <ArrowDropUpIcon sx={{ fontSize: "1.5rem" }} />
                ) : (
                  <ArrowDropDownIcon sx={{ fontSize: "1.5rem" }} />
                )}
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: ".7rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {t("more")}
                </Typography>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mr: "2rem",
              }}
            >
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuLanguageId}
                aria-haspopup="true"
                onClick={handleLanguageMenuOpen}
                color="#fff"
                style={{ marginRight: "1.5rem", color: "#fff" }}
              >
                {i18n.language === "en" && (
                  <img src={england} alt="england" width={50} />
                )}
                {i18n.language === "es" && (
                  <img src={spain} alt="spain" width={50} />
                )}
                <ArrowDropDownIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="#fff"
                style={{ marginRight: "1.5rem", color: "#fff" }}
              >
                <PersonIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="#fff"
                style={{ color: "#fff" }}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </AppBar>
      </HideOnScroll>
      {renderMobileMenu}
      {renderMenu}
      {renderLanguageMenu}
      {renderMoreMenu}
    </Box>
  );
}
