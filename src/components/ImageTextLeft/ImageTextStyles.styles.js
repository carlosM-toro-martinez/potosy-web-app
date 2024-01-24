import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
   container: {
      marginTop: '3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      transform: 'translateY(-20px)',
      transition: 'opacity 0.5s, transform 0.5s',
      margin: '10px',
   },
   h2: {
      fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      color: '#CC3700',
      textAlign: 'center',
      [mq('md')]: {
         fontSize: '2.5rem',

      },

   },
   h3: {
      fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
      fontSize: '1.5rem',
      marginTop: '0.5rem',
   },
   box: {
      display: 'flex',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      width: '100%',
      color: 'black',
   },
   textContainer: {
      margin: '1rem 1rem 0rem 0rem',

      [theme.breakpoints.down('xs')]: {
         width: '380px',
      },

   },
   tourContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      [theme.breakpoints.down('sm')]: {
         flexDirection: 'column-reverse',
         alignItems: 'center',
      },
      [theme.breakpoints.down('xs')]: {
         width: '100%',
      },
   },
   tourImage: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      '& img': {
         objectFit: 'contain',
         borderRadius: '20px',
         transition: 'transform 1s ease',
         transform: 'translateY(-100%)',
         position: 'relative',
         width: '600px',
         zIndex: 1,
      },
      [theme.breakpoints.down('xs')]: {
         //display:'none',
         width: '50%',
         '& img': {
            objectFit: 'contain',
            borderRadius: '15px',
            transition: 'transform 1s ease',
            transform: 'translateY(-100%)',
            position: 'relative',
            zIndex: 1,
            width: '300px'
         },
      },
      [theme.breakpoints.down('sm')]: {
         width: '100%',
      },
      [theme.breakpoints.up('md')]: {

         width: '200%',
         margin: '0 3rem'
      },
      [theme.breakpoints.up('lg')]: {

         width: '150%',
      },
   },
   showAnimation: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 2s ease',
      '& $tourImage img': {
         transform: 'translateY(0)',
      },
   },
}));
