import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    formContainer: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: '4rem',
        width: '50rem',
        position: 'relative',

        '& h4': {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginTop: theme.spacing(8)
        }
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: theme.zIndex.drawer + 1,
    },
    form: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    formField: {
        marginTop: theme.spacing(8),
        '& .MuiInputBase-input': {
            color: '#ffffff',
        },
        '& .MuiInputLabel-root': {
            color: '#ffffff',
        },
    },

    formLabel: {
        color: 'white',
        marginBottom: '8px',
    },
    formInput: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginBottom: '2rem'
    }
}))