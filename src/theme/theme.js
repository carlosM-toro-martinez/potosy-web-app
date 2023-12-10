import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
// import Roboto from '../assets/font/Roboto-Bold.ttf';
// import Montserrat from '../assets/font/Montserrat-ExtraBold.otf';
// import Montserrat_Regular from '../assets/font/Montserrat-Regular.ttf';
// import Lato from '../assets/font/Lato-Light.ttf';
import Lato_Black from '../assets/font/Lato-Black.ttf';

const LatoBlack = {
    fontFamily: 'Lato-Black',
    src: `url(${Lato_Black})`
}

// const MontserratNormal = {
//   fontFamily: 'Montserrat-Ligth',
//   src: `url(${Montserrat_Regular})`
// }
// const RobotoRegular = {
//   fontFamily: 'Roboto-Bold',
//   src: `url(${Roboto})`
// }
// const MontserratRegular = {
//   fontFamily: 'Montserrat-Bold',
//   src: `url(${Montserrat})`
// }
// const LatoRegular = {
//   fontFamily: 'Lato-Ligth',
//   src: `url(${Lato})`
// }
const theme = createTheme({
    typography: {
        fontFamily: [
            `"${LatoBlack.fontFamily}"`,
            //   `"${MontserratNormal.fontFamily}"`,
            //   `"${MontserratRegular.fontFamily}"`,
            //   `"${RobotoRegular.fontFamily}"`,
            //   `"${LatoRegular.fontFamily}"`,
        ].join(','),
    },
    palette: {
        primary: {
            // green dark
            main: '#01461D',
        },
        secondary: {
            // green ligth
            main: '#178435',
        },
        third: {
            // gray
            main: '#D4D4D4',
        },
        fourth: {
            main: '#CFFF8D',
        },
        neutro1: {
            //white
            main: '#ffffff',
        },
        neutro2: {
            //black
            main: '#000000',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    LatoBlack,
                    // MontserratNormal,
                    // RobotoRegular,
                    // MontserratRegular,
                    // LatoRegular],
                ]
            },
            body: {
                fontFamily: ['Roboto-Regular'],
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0,
                padding: 0,
            },
        },
    },
})
const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
)
export default Theme;