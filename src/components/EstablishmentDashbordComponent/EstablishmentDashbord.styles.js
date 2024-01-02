import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
        fontWeight: 'bold',
        '& h3': {
            marginTop: theme.spacing(9),
            textTransform: 'uppercase',
            color: 'black'

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