import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#C0C0C0',
        width: '17rem',
        height: '20rem',
        [mq('md')]: {
            height: '27rem',
            width: '20rem',
        }
    },
    image: {
        height: 200,
        [mq('md')]: {
            height: 250,
        }
    },
    title: {
        '& h5': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        },
    }
}))