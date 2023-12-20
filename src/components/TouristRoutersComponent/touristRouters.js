import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '1rem',
    aligneItems: 'center',
    padding: '0 1rem 0 1rem',
    gap: 5,
    [mq('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 30,
    },
  },
  seccionRoutes: {
    display: 'flex',
    flexDirection: 'column',
    [mq('md')]: {
      marginTop: '1rem',

    },
  },
  map: {
    height: '350px',
    width: '350px',
    marginTop: '2rem',
    [mq('md')]: {
      height: '450px',
      width: '600px',
      marginTop: '1rem',
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5rem'
  }

}))