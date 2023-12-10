import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { useStyles } from './CardsContact.styles';
import infotourImage from '../../../assets/images/infotour.jpg'
import { useNavigate } from 'react-router-dom';

function CardsContactComponent({ infoturData }) {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Card sx={{ backgroundColor: '#C0C0C0' }} className={classes.container} onClick={() => navigate('/contacts/details', { state: infoturData })}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="250"
          className={classes.image}
          image={infotourImage}
          alt="Live from space album cover"
        />
        <CardContent >
          <Box className={classes.title}>
            <Typography variant="h5">
              INFOTOUR
            </Typography>
          </Box>
          <Box sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}>
            <Typography variant="body2" color="text.secondary">
              {infoturData.descripcion}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/contacts/details', { state: infoturData })} >
          Ver Mas
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardsContactComponent