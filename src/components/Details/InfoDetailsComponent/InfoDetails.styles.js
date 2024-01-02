import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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