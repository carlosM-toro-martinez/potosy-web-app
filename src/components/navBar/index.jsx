import { useStyles } from './navBar.styles';
import sectionsService from '../../async/services/sectionsService';
import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import RouteIcon from '@mui/icons-material/Route';
import { useQuery } from 'react-query';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactsIcon from '@mui/icons-material/Contacts';
import AppBarComponent from './AppBarComponent';
import potosyBlack from '../../assets/images/iconPotosy.jpg'
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import { Typography } from '@mui/material';


const drawerWidth = 220;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'rgba(0, 0, 0)',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NavBar = (props) => {
  const { children } = props;
  const classes = useStyles();
  const { data, isLoading, isError, error } = useQuery('sections', () => sectionsService());
  const { auth, user } = useContext(MainContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(auth ? true : false);
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/${route}`)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent setOpen={setOpen} open={open} />
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <img
            src={potosyBlack}
            width='50px'
            height='50px'
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              marginTop: '0.5rem'
            }} />
          <IconButton onClick={handleDrawerClose} style={{ color: 'white', marginLeft: '6.5rem' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: 'white' }} />
        <List>
          <ListItem sx={{ marginTop: -1, marginBottom: -1 }} >
            <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('')} >
              <ListItemIcon>
                <HomeIcon sx={{ color: '#FFDAB9' }} />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                Inicio
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ marginTop: -1, marginBottom: -1 }} >
            <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('chutillos')} >
              <ListItemIcon>
                <CelebrationIcon sx={{ color: '#FFDAB9' }} />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                Chutillos
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ marginTop: -1, marginBottom: -1 }} >
            <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('routes')} >
              <ListItemIcon>
                <RouteIcon sx={{ color: '#FFDAB9' }} />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                Rutas Turisticas
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ marginTop: -1, marginBottom: -1 }}>
            <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('contacts')} >
              <ListItemIcon>
                <ContactsIcon sx={{ color: '#FFDAB9' }} />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                Contactos
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: 'white' }} />
        {auth && !user ?
          <List>
            <ListItem sx={{ marginTop: -1, marginBottom: -1 }} >
              <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('admin')} >
                <ListItemIcon>
                  <AdminPanelSettingsIcon sx={{ color: '#FFDAB9' }} />
                </ListItemIcon>
                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                  Negocio
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginTop: -2, marginBottom: -2 }}>
              <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('admin/sections')} >
                <ListItemIcon>
                  <AdminPanelSettingsIcon sx={{ color: '#FFDAB9' }} />
                </ListItemIcon>
                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                  Apartados
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginTop: -2, marginBottom: -2 }}>
              <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('admin/news')} >
                <ListItemIcon>
                  <AdminPanelSettingsIcon sx={{ color: '#FFDAB9' }} />
                </ListItemIcon>
                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                  Noticias
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginTop: -2, marginBottom: -2 }}>
              <ListItemButton sx={{ color: '#FFDAB9' }} onClick={() => handleNavigate('admin/admins')} >
                <ListItemIcon>
                  <AdminPanelSettingsIcon sx={{ color: '#FFDAB9' }} />
                </ListItemIcon>
                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                  Admins
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
          : null}
        {auth && user ?
          <List>
            <ListItem >
              <ListItemButton sx={{ color: 'white' }} onClick={() => navigate('/establishmentAdmin/home', { state: user.business_id })} >
                <ListItemIcon>
                  <AdminPanelSettingsIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >
                  Mi Lugar
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
          : null}
      </Drawer>
    </Box>
  )
}

export default NavBar;
