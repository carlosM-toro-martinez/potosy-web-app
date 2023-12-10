import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '90vh',
        width: '100%',
        marginTop: '4rem',
        [mq('md')]: {
            height: '100vh',
            width: '100%',
            marginTop: '4rem',
        }
    },
    map: {
        height: '85vh',
        width: '95%',
        [mq('md')]: {
            width: '100%',
        }
    }
}))