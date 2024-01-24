import * as React from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import newsService from '../../../async/services/newsService';
import { useQuery } from 'react-query';
import { MainContext } from '../../../context/MainContext';
import mq from '../../../config/mq';


// function HideOnScroll(props) {
//   const { children, window, threshold } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     threshold: threshold || 50,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
//   threshold: PropTypes.number,
// };


export default function AppBarComponent(props) {
  const { data, isLoading, refetch, error } = useQuery(`newsAdmin`, () => newsService());
  const { setOpen, open } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { setAuth, setToken, setUser } = React.useContext(MainContext);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`)
  }

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
  }

  const handleMenuClose = (url) => {
    if (url) {
      navigate(`/${url}`)
    }
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={() => handleMenuClose()}
    >
      <MenuItem onClick={() => handleMenuClose('login')}>Iniciar Sesion</MenuItem>
      <MenuItem onClick={() => handleLogout()}>Cerrar Sesion</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleNavigate('')}>
        <IconButton
          size="large"
          color="inherit">
          <Badge color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Inicio</p>
      </MenuItem>
      {/* <MenuItem onClick={() => handleNavigate('news')}>
        <IconButton
          size="large"
          color="inherit">
          <Badge badgeContent={!isLoading && !error ? data.length : 0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Noticias Y Novedades</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Sesion</p>
      </MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      {/* <HideOnScroll {...props}> */}
      <AppBar open={open} sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.8 )'
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: '2rem' }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => handleNavigate('')}>
              <Badge color="error">
                <HomeIcon />
              </Badge>
              <Typography textAlign="center" sx={{ marginLeft: '0.7rem', fontWeight: 'bold', color: '#FFDAB9' }}>INICIO</Typography>
            </IconButton>
            {/* <IconButton
              size="large"
              color="inherit"
              onClick={() => handleNavigate('news')}
            >
              <Badge badgeContent={!isLoading && !error ? data.length : 0} color="error">
                <NotificationsIcon />
              </Badge>
              <Typography textAlign="center" sx={{ marginLeft: '0.7rem', fontWeight: 'bold', color: '#FFDAB9' }}>Noticias y Novedades</Typography>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
              <Typography textAlign="center" sx={{ marginLeft: '0.7rem', fontWeight: 'bold', color: '#FFDAB9' }}>Sesiones</Typography>
            </IconButton>
            <Button
              variant="contained"
              onClick={() => navigate('/establishmentAdmin')}
              sx={{
                backgroundColor: '#FF4500',
                color: 'black',
                marginLeft: '1rem',
                '&:hover': {
                  backgroundColor: '#FF4500',
                }
              }}
            >
              Registra tu establecimiento
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {!isLoading && !error && data?.length > 0 ? <IconButton
        size="large"
        color="inherit"
        onClick={() => handleNavigate('news')}
        style={{
          color: 'black',
          position: 'fixed',
          zIndex: '1000',
          top: 0,
          right: 0,
          marginTop: '5rem',
          marginRight: '.5rem',
          [mq('md')]: {
            marginTop: '5rem',
          },
        }
        }
      >
        <Badge badgeContent={!isLoading && !error ? data.length : 1} color="error">
          {/* <NotificationsActiveIcon style={{ fontSize: '3rem' }} /> */}
          <Typography style={{ fontSize: '2rem' }}>🔔</Typography>
        </Badge>
      </IconButton> : null}
      {/* </HideOnScroll> */}
      {renderMobileMenu}
      {renderMenu}
    </Box >
  );
}