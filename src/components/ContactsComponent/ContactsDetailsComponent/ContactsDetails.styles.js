import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '8rem',
        marginBottom: '5rem',
        maxWidth: '600px',
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
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '1rem'
    },
    description: {
        marginTop: theme.spacing(2),
    },
}))