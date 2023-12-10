import { useStyles } from './modal.styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import MapIcon from '@mui/icons-material/Map';
import CarouselImagesDetailsComponent from './CarouselImagesDetailsComponent';
import { useQuery } from 'react-query';
import businessFindOne from '../../async/services/businessFindOneService';
import { Twitter, WhatsApp, Facebook, Instagram } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import businessStateUpdateService from '../../async/services/put/businessStateUpdateServices';

const OpeningHours = ({ openinghours }) => {
  const classes = useStyles();
  return (
    <Box className={classes.openingHours}>
      <Typography variant="h3" component="h3">
        {openinghours[0].morning_hours ? `Mañana:\n ${openinghours[0].morning_hours[0]} -  ${openinghours[0].morning_hours[1]}` : ''}
      </Typography>
      {openinghours[0].weekend ? <Typography variant="h3" component="h3">
        {openinghours[0].weekend}
      </Typography> : null}
      <Typography variant="h3" component="h3">
        {openinghours[0].afternoon_hours ? `Tarde:\n ${openinghours[0].afternoon_hours[0]} - ${openinghours[0].afternoon_hours[1]}` : ''}
      </Typography>
    </Box>
  );
};

const BusinessContact = ({ data }) => {
  return (
    <Box
      sx={{ padding: '1rem 2rem 1rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {data.website_url ?
        <Button
          key={'web'}
          variant="contained"
          style={{ backgroundColor: '#2ecc71', marginRight: '8px', color: 'black' }}
          startIcon={<PublicIcon />}
        >sitio web</Button> : null}
      <Table>
        <TableHead>
          <TableRow sx={{
            color: 'white',
          }}>
            {data.phone_number ? <TableCell >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, color: '#3498db' }}>
                <PhoneIcon />
                <Typography>
                  Telefono
                </Typography>
              </Box>
            </TableCell> : null}

            {data.mail ? <TableCell>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, color: '#e74c3c' }}>
                <EmailIcon />
                <Typography>
                  Correo
                </Typography>
              </Box>
            </TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ color: 'white' }}>
            {data.phone_number ? <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
              <Typography>
                {data.phone_number}
              </Typography>
            </TableCell> : null}
            {data.mail ? <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
              <Typography>
                {data.mail}
              </Typography>
            </TableCell> : null}
          </TableRow>
        </TableBody>
      </Table>

      {data.address ?
        <Typography style={{ color: '#f39c12' }}>
          <LocationOnIcon /> Direccion
        </Typography> : null}
      {data.address ?
        <Typography >
          {data.address}
        </Typography> : null}
    </Box>
  );
};

const SocialNetworks = ({ socialnetworks }) => {
  const classes = useStyles();

  const socialNetworks = [
    { name: 'Twitter', icon: <Twitter />, color: '#1DA1F2' },
    { name: 'WhatsApp', icon: <WhatsApp />, color: '#25D366' },
    { name: 'Facebook', icon: <Facebook />, color: '#1877F2' },
    { name: 'Instagram', icon: <Instagram />, color: '#E1306C' },
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
            md={3}
          >
            <Button
              key={network.name}
              variant="contained"
              style={{ backgroundColor: network.color, marginRight: '8px' }}
              startIcon={network.icon}
            >
              {network.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Products = ({ products }) => {
  const [showTable, setShowTable] = useState(false);

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };
  return (
    <Box sx={{ flex: 0.4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button onClick={handleToggleTable} sx={{ marginBottom: '1rem' }}>
        {showTable ? 'Ocultar Productos' : 'Mostrar Productos'}
      </Button>
      {showTable && products[0]?.product_id ? <Typography variant="h4" component="h4">
        Productos
      </Typography> : null}
      {showTable && products[0]?.product_id ? <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <TableHead>
          <TableRow sx={{
            color: 'white'
          }}>
            <TableCell sx={{ color: 'white' }}>Detalle</TableCell>
            <TableCell sx={{ color: 'white' }}>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products[0]?.product_id ? products.map(item => (
            <TableRow key={item.product_id} sx={{ color: 'white' }}>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.product_details}</TableCell>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.price}</TableCell>
            </TableRow>
          ))
            : null}
        </TableBody>
      </Table> : null}
    </Box>
  );
};

const Promotions = ({ promotions }) => {
  const [showTable, setShowTable] = useState(false);

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };
  return (
    <Box sx={{ flex: 0.4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button onClick={handleToggleTable} sx={{ marginBottom: '1rem', alignItems: 'center' }}>
        {showTable ? 'Ocultar Promociones' : 'Mostrar Promociones'}
      </Button>
      {showTable && promotions[0]?.promotion_id ? <Typography variant="h4" component="h4">
        Promociones
      </Typography> : null}
      {showTable && promotions[0]?.promotion_id ? <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <TableHead>
          <TableRow sx={{
            color: 'white'
          }}>
            <TableCell sx={{ color: 'white' }}>Detalle</TableCell>
            <TableCell sx={{ color: 'white' }}>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {promotions[0]?.promotion_id ? promotions.map(item => (
            <TableRow key={item.promotion_id} sx={{ color: 'white' }}>
              {/* <TableCell sx={{
                    color: 'white', textTransform: 'capitalize', overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '300px'
                  }}>{item?.attributes?.image?.data?.attributes?.url}</TableCell> */}
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.promotion_details}</TableCell>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.price}</TableCell>
            </TableRow>
          ))
            : null}
        </TableBody>
      </Table> : null}
    </Box>
  );
};


function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error, refetch } = useQuery(`businessOne`, () => businessFindOne(id));
  const { auth, user } = useContext(MainContext);

  const handleStateChange = async (data) => {
    try {
      const newData = { state: !data.state };
      await businessStateUpdateService(data.business_id, newData);
      navigate('/admin');
    } catch (error) {
      console.error('Error update business:', error);
    }
  }

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {!isLoading && !error ? data.map((data) => (
        <div className={classes.box}>
          <Typography variant="h2" component="h2">
            {data.business_name}
          </Typography>
          <CarouselImagesDetailsComponent images={data.images} />
          <SocialNetworks socialnetworks={data.socialnetworks[0]} />
          <Typography variant="h3" component="h3">
            mas informacion
          </Typography>
          <OpeningHours openinghours={data.openinghours} />
          <Typography component="h6">
            {data.business_description}
          </Typography>
          <BusinessContact data={data} />
          <div className={classes.containerProducts} >
            <Products products={data.products} />
            <Promotions promotions={data.promotions} />
          </div>
          <Button variant="contained" startIcon={<MapIcon />}
            sx={{ marginBottom: '3rem', backgroundColor: '#FF4500', width: '80%', height: '3rem' }}>
            <Link
              to={`/map`}
              state={{ address: data.address, coordinates: data.coordinates }}
              style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}
            >
              Como Llegar
            </Link>
          </Button>
          {!data.state && auth && !user ? <Button variant="contained" onClick={() => handleStateChange(data)} >
            Agregar Establecimiento
          </Button> : null}
        </div>
      ))
        : null}
    </Box>
  )
}
export default Details;