import React from 'react'
import { Box, Typography } from '@mui/material';
import { useStyles } from './chutillosComponent.styles';
import background from '../../assets/images/background.jpg'
import about from '../../assets/images/about.jpg'

function ChutillosComponent() {
  const videoId = 'Nd1ROm0bXcg?si=TBvYhvQl_Ix_WMok';
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      sx={{ backgroundImage: `url(${background})` }}>
      <div className={classes.box}>
        <Box className={classes.textContainer}>
          <Typography variant="h4" >
            Chutillos la fiesta grande
          </Typography>
          <div>
            <iframe
              height="315"
              className={classes.video}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <Box className={classes.textWrapper}>
            <Typography variant="h5" >
              Chutillos ahora patrimonio...
            </Typography>
            <Typography variant="h6" >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </Typography>
          </Box>
        </Box>
      </div>
    </Box>
  )
}

export default ChutillosComponent