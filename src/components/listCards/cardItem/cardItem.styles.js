import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
  // box: {
  //     width: '20rem',
  // },
  // banner: {
  //     backgroundColor: '#C0C0C0',
  //     '& h5': {
  //         color: 'red',
  //         textAlign: 'center',
  //         textTransform: 'capitalize'
  //     },
  //     '& p': {
  //         color: '#000',
  //         textAlign: 'center',
  //     }
  // },
  book: {
    width: '9rem',
    height: '9rem',
    background: '#808080',
    perspective: '75rem',
    marginTop: '1rem',
    borderRadius: '3px',
    [mq('md')]: {
      width: '18rem',
      height: '18rem',
    },
  },
  cover: {
    position: 'absolute',
    width: '8.7rem',
    height: '100%',
    background: '#FFFFFF',
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: 'cover',
    transformOrigin: 'left',
    transform: 'rotateY(-15deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    boxShadow: 'inset 0 0 1.5rem #000',
    borderRadius: '3px',
    [mq('md')]: {
      width: '17.4rem',
    },
  },
  container: {
    marginTop: '1rem',
    width: '9rem',
    '& h4': {
      fontSize: '14px',
      color: '#FFDAB9',
      fontFamily: 'Roboto-bold',
      fontStyle: 'normal',
    },
    [mq('md')]: {
      width: '18rem',
      '& h4': {
        fontSize: '28px',
      },
    },
  },
}))