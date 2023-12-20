import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
  title: {
    width: '100%',
    '& h5': {
      fontSize: 20,
      fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
      marginTop: '1rem',
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
      textTransform: 'uppercase'
    },
    [mq('md')]: {
      '& h5': {
        fontSize: 35,
      },
    },

  },
  container: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '15rem',
    width: '100%',
    position: 'relative',
    [mq('md')]: {
      height: '25rem',
    },
  },
  footer: {
    display: 'flex',
    backgroundColor: '#FF4500',
    width: '100%',
    height: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    borderTop: '1px solid black',
    borderRight: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
    display: 'flex',
    marginTop: '.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '32vh',
    [mq('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  image: {
    width: '100px',
    height: 'auto',
    borderRadius: '10px',
    [mq('md')]: {
      width: '150px',
      height: 'auto',
    },
  },
  link: {
    color: '#CC3700'
  },
  containerLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    '& h5': {
      fontSize: 10,
      fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
      textTransform: 'uppercase'
    },
    [mq('md')]: {
      gap: 20,
      '& h5': {
        fontSize: 15,

      },
    },
  }

}))