import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '5rem',
        marginBottom: '5rem',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: theme.spacing(2),
        border: '1px solid #ccc',
        borderRadius: theme.spacing(1),
        backgroundColor: '#222',
        color: '#fff',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
        textTransform: 'uppercase'
    },
    label: {
        fontWeight: 'bold',
        marginRight: theme.spacing(1),
    },
    infoRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: '10rem',
        height: '10rem',
        marginRight: theme.spacing(2),
        overflow: 'hidden',
        marginBottom: '1rem'
    },
    description: {
        marginTop: theme.spacing(2),
    },
    icon: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        fontSize: '5rem',
        '&:hover': {
            color: '#CC3700',
            cursor: 'pointer',
        },
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
}))