import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
  boxShadow: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  descriptionSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& h4': {
      width: '100%',
      fontSize: '.7rem',
      color: '#5B5B5B',
      fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
      textAlign: 'center',
      padding: '1.5rem 1.5rem 0 1.5rem',
      textTransform: 'uppercase'
    },
    '& h5': {
      fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
      marginTop: '1rem',
      fontSize: '.8rem',
      width: '50%',
      padding: '1rem 0 1rem 0',
      textAlign: 'center',
      fontWeight: 'bold',
      padding: theme.spacing(1),
      color: 'black',
      textTransform: 'uppercase'

    },
    [mq('md')]: {
      '& h4': {
        fontSize: '1.3rem',
      },
      '& h5': {
        fontSize: '3rem',
        letterSpacing: '.1rem',
      },
    },
  },
  containerDesktop: {
    display: 'none',
    [mq('md')]: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    }
  },
  containerMovil: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    [mq('md')]: {
      display: 'none',
    }
  },

}))