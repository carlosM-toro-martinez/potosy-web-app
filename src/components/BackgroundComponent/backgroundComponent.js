import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))