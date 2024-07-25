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
import encuentraLogo from "../../../assets/logos/CircleLogo/0.png";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
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
  const { data, isLoading, refetch, error } = useQuery(`newsAdmin`, () =>
    newsService()
  );
  const { setOpen, open } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { setAuth, setToken, setUser } = React.useContext(MainContext);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLogout = () => {
    setAuth(false);
    setToken();
    setUser();
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
      <MenuItem onClick={() => handleNavigate("")}>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Inicio</p>
      </MenuItem>
      <MenuItem
        component="a"
        href="#footer"
        //onClick={() => handleNavigate("contacts")}
      >
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Contactos</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonIcon />
        </IconButton>
        <p>Sesion</p>
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

  const [appBarBackground, setAppBarBackground] = React.useState("transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setAppBarBackground("rgba(0, 0, 0, .5)");
      } else {
        setAppBarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <HideOnScroll {...props}>
        <AppBar
          open={open}
          sx={{
            backgroundColor: appBarBackground,
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "5rem",
              justifyContent: "space-between",
              paddingLeft: "4rem",
              backgroundColor: appBarBackground,
            }}
          >
            {/* <IconButton
        size="large"
        edge="start"
        color="#fff"
        onClick={handleDrawerOpen}
        aria-label="open drawer"
      >
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton> */}
            <IconButton onClick={() => handleNavigate("")}>
              <img
                src={encuentra}
                alt="encuentra"
                width="80px"
                style={{
                  borderRadius: "1rem",
                  hover: {
                    cursor: "pointer",
                  },
                }}
              />
            </IconButton>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("")}
              >
                <HomeIcon />

                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Inicio
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("section/1")}
              >
                <ListAltIcon />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Apartados
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("about")}
              >
                <InfoIcon />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Quienes Somos
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("chutillos")}
              >
                <CelebrationIcon />
                <Typography
                  sx={{
                    fontSize: "1rem",
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
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                onClick={() => handleNavigate("routes")}
              >
                <MapIcon />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Rutas Turisticas
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                href="#footer"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: "2px solid #FF4500",
                  },
                }}
                //onClick={() => handleNavigate("contacts")}
              >
                <ContactPhoneIcon />
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "1rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Contactos
                </Typography>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mr: "2rem",
              }}
            >
              {/* <Button
          variant="contained"
          onClick={() => navigate("/establishmentAdmin")}
          sx={{
            backgroundColor: "#FF4500",
            color: "#fff",
            
            //height: "90%",
            fontSize: ".93rem",
            marginLeft: "1rem",
            padding: " 0 .5rem 0 .5rem",
            "&:hover": {
              backgroundColor: "#FF4500",
            },
          }}
        >
          <Typography
            textAlign="center"
            sx={{
              
              fontSize: ".93rem",
            }}
          >
            REGISTRA TU ESTABLECIMIENTO
          </Typography>
        </Button> */}
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
      {!isLoading && !error && data?.length > 0 ? (
        <IconButton
          size="large"
          color="inherit"
          onClick={() => handleNavigate("news")}
          style={{
            color: "#fff",
            position: "fixed",
            zIndex: "800",
            top: 0,
            right: 0,
            marginTop: "5rem",
            marginRight: ".5rem",
            [mq("md")]: {
              marginTop: "4rem",
            },
          }}
        >
          <Badge
            badgeContent={!isLoading && !error ? data.length : 1}
            color="error"
          >
            <Typography style={{ fontSize: "2rem" }}>🔔</Typography>
          </Badge>
        </IconButton>
      ) : null}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
