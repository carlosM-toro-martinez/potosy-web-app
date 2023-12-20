import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
  containerStyle: {
    backgroundSize: 'cover',
    width: '100%',
    height: '35vh',
    overflowX: 'hidden',
    [mq('md')]: {
      height: '100vh',
      minHeight: '100vh',
    },
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    '& h4': {
      fontSize: '1rem',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '.1rem',
      fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
      textTransform: 'uppercase',
      padding: '0 1rem 0 1rem'
    },
    [mq('md')]: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      '& h4': {
        fontSize: '2.5rem',
        letterSpacing: '.2rem',
      },
    },
  },
  logosContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  logoPotosy: {
    display: 'none',
    width: '150px',
    height: '120px',
    borderRadius: '5px',
    [mq('md')]: {
      display: 'block',
      margin: '0 1rem 1rem 1rem'
    },
  },
  logoUnesco: {
    display: 'none',
    width: '150px',
    height: '120px',
    borderRadius: '5px',
    [mq('md')]: {
      display: 'block',
      margin: '0 1rem 1rem 1rem'
    },
  },
}))