import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
        [mq('md')]: {
            flexDirection: "row",
            gap: 80,

        },
        '& h3': {
            textAlign: 'center',
            fontSize: 22,
            color: 'black'
        }
    },
    container: {
        transition: 'transform 0.2s, cursor 0.2s',
        cursor: 'default',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    infotourImage: {
        width: '300px',
        cursor: 'default',
        '&:hover': {
            cursor: 'pointer',
            width: '350px',
            marginTop: '-.5rem'
        },
        [mq('md')]: {
            width: '400px',
            '&:hover': {
                cursor: 'pointer',
                width: '450px',
                marginTop: '-1rem'
            },
        },
    }
}))