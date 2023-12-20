import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import HankenGrotesk_SemiBoldItalic from '../assets/font/static/HankenGrotesk-SemiBoldItalic.ttf';
import HankenGrotesk_ExtraBoldItalic from '../assets/font/static/HankenGrotesk-ExtraBoldItalic.ttf';
import HankenGrotesk_LightItalic from '../assets/font/static/HankenGrotesk-LightItalic.ttf';



const HankenLight = {
    fontFamily: 'Hanken-Light',
    src: `url(${HankenGrotesk_LightItalic})`
}
const HankenSemi = {
    fontFamily: 'Hanken-Semi',
    src: `url(${HankenGrotesk_SemiBoldItalic})`
}
const HankenBold = {
    fontFamily: 'Hanken-Bold',
    src: `url(${HankenGrotesk_ExtraBoldItalic})`
}
const theme = createTheme({
    typography: {
        fontFamily: [
            `"${HankenBold.fontFamily}"`,
            `"${HankenLight.fontFamily}"`,
            `"${HankenSemi.fontFamily}"`,
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
                    HankenLight,
                    HankenSemi,
                    HankenBold,
                ],
            },
            body: {
                fontFamily: ['Roboto-bold'],
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0,
                padding: 0,
            },
        },
    },
})
console.log('Tema:', theme);
const Theme = ({ children }) => (

    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
)
export default Theme;