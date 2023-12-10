import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
        '& h4': {
            marginTop: '3rem',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase'
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
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginBottom: '5rem'
    },

}))