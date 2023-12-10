import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useStyles } from './NewsCard.styles';
import { useNavigate } from 'react-router-dom';

function NewsCardComponent({ data }) {
  const correctedUrl = data.promotional_image_url.replace(/\\/g, '/');
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/news/details', { state: data });
  };
  const classes = useStyles();
  return (
    <Card sx={{ display: 'flex', width: '20rem', cursor: 'pointer', height: '10rem' }} onClick={handleNavigate}>
      <CardMedia
        component="img"
        sx={{ width: 130 }}
        image={correctedUrl}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C0C0C0', width: '100%' }}>
        <CardContent >
          <Box className={classes.containerText} sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}>
            <Typography variant="h5" sx={{ color: 'red', fontWeight: 'bold', textTransform: 'uppercase' }}>
              {data.title}
            </Typography>
          </Box>
          <Box className={classes.containerText} sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}>

            <Typography sx={{ color: 'black' }}>{data.description}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}

export default NewsCardComponent