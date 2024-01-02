import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: theme.spacing(10),
        '& h4': {
            width: '30rem',
            fontSize: '2rem',
            color: '#FFDAB9',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            padding: theme.spacing(1),
            color: 'black',
            fontWeight: 'bold',
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginBottom: '5rem'
    },

}))