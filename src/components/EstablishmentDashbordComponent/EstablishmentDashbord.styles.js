import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        '& h3': {
            marginTop: theme.spacing(9),
            textTransform: 'uppercase',
            color: 'white'

        },
        '& h4': {
            textTransform: 'uppercase',
        }
    },
    table: {
        width: '50rem',
    },
    row: {
        fontWeightL: 'bold',
        textTransform: 'uppercase'
    },
    cellDesc: {
        color: 'white',
        textTransform: 'capitalize',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '300px',
    },
    button: {
        marginBottom: '2rem'
    }
}))