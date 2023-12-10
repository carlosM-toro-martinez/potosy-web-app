import React from 'react'
import { Box, Typography } from '@mui/material';
import { useStyles } from './AboutComponent.styles';
import background from '../../assets/images/background.jpg'
import about from '../../assets/images/about.jpg'

function AboutComponent() {
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      sx={{ backgroundImage: `url(${background})` }}>
      <div className={classes.box}>
        <Box className={classes.textContainer}>
          <Typography variant="h4" >
            quienes somos
          </Typography>
          <Box className={classes.textWrapper}>
            <img
              src={about}
              alt="about"
              className={classes.img} />
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

export default AboutComponent