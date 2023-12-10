import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper: {
        transform: 'scale(0.5)',
        transformOrigin: 'top',
        // [theme.breakpoints.up('lg')]: {
        //     transform: 'scale(0.45)',
        // },
        // [theme.breakpoints.up('xl')]: {
        //     transform: 'scale(0.85)',
        // },
        // [theme.breakpoints.up('4k')]: {
        //     transform: 'scale(1.25)',
        // },
    },
    container: {
        maxWidth: '120rem',
        padding: '4rem 1rem',
        margin: '0 auto',
    },
    swiperContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '52rem',
        padding: '2rem 0',
        position: 'relative',
    },
    swiperSlide: {
        width: '100%',
        maxWidth: '37rem',
        height: '42rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '28rem',
            height: '36rem',
        },
    },
    swiperSlideImg: {
        width: '37rem',
        height: '42rem',
        borderRadius: '2rem',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            width: '28rem',
            height: '36rem',
        },
    },
    swiperSlideShadowLeft: {
        display: 'none',
    },
    swiperSlideShadowRight: {
        display: 'none',
    },
    sliderControler: {
        position: 'relative',
        bottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderControlerButtonNext: {
        left: '58% !important',
        transform: 'translateX(-58%) !important',
        [theme.breakpoints.up('sm')]: {
            left: '70% !important',
            transform: 'translateX(-70%) !important',
        },
        [theme.breakpoints.down('xs')]: {
            left: '80% !important',
            transform: 'translateX(-80%) !important',
        },
    },
    sliderControlerButtonPrev: {
        left: '30% !important',
        transform: 'translateX(-30%) !important',
        [theme.breakpoints.down('sm')]: {
            left: '20% !important',
            transform: 'translateX(-20%) !important',
        },
    },
    sliderControlerArrow: {
        background: 'var(--white)',
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        left: '42%',
        transform: 'translateX(-42%)',
        filter: 'drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1))',
    },
    sliderControlerArrowIcon: {
        fontSize: '2rem',
        color: '#222224',
    },
    sliderControlerArrowAfter: {
        content: '',
    },
    swiperPagination: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 1rem',
    },
    swiperPaginationBullet: {
        filter: 'drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1))',
    },
    swiperPaginationBulletActive: {
        background: 'var(--primary)',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '3.5rem',
        marginTop: '1rem',
    },
}));