import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '30rem',
        gap: 10,
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        padding: theme.spacing(2),
        backgroundColor: 'rgba(245, 245, 245, 0.5)',
        borderRadius: theme.spacing(1),
        '& h5': {
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'black'

        }
    },
    icon: {
        marginRight: theme.spacing(5),
    },
    chip: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}))