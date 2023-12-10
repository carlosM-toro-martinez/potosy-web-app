import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    containerText: {
        '& h5': {
            fontSize: 20,
        },
        '& p': {
            marginTop: '0.5rem',
            fontSize: 14,
        },
    },
}))