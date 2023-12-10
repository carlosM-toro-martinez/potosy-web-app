import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    formContainer: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: '4rem',
        width: '50rem',
        '& h4': {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginTop: theme.spacing(8)
        }
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
            color: '#ffffff', // Texto blanco en los campos de entrada
        },
        '& .MuiInputLabel-root': {
            color: '#ffffff', // Color blanco para las etiquetas
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