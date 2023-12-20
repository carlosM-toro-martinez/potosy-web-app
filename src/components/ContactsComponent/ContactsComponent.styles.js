import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5rem 0 8rem 2rem',
        maxWidth: '90rem',
        color: '#FFDAB9',
        '& h4': {
            color: 'black',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',

        },
        [mq('md')]: {
            '& h4': {
                fontSize: '4rem',
                padding: '1rem 0 1rem 0',
            },
        }
    },
    contanerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
        }
    },
    contanerMovile: {
        display: 'flex',
        [mq('md')]: {
            display: 'none',

        }
    }
}))