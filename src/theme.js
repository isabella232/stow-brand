import { createMuiTheme } from '@material-ui/core/styles';

const teal = '#61bac6';
const lightTeal = '#80c7d1';
const darkTeal = '#43828a';
const purple = '#711e99';
const magenta = '#cf2186';
const blue = '#1b2d67';
const black = '#000';
const white = '#fff';
const gray = '#5D6265';

const primaryFont = 'Raleway';
const secondaryFont = 'Heavitas'

const theme = createMuiTheme({
  typography: {
    primary: primaryFont,
    secondary: secondaryFont,
    fontFamily: secondaryFont,
    body1: {
      fontFamily: primaryFont,
      fontSize: 24,
    },
    body2: {
      fontFamily: primaryFont,
    },
    subheading: {
      fontFamily: primaryFont,
    },
    caption: {
      fontFamily: primaryFont,
    },
    title: {
      fontSize: 28,
    },
    display2: {
      color: black,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: white,
        backgroundColor: purple,
      },
    },
  },
  palette: {
    primary: {
      main: teal,
      contrastText: black,
    },
    secondary: {
      main: purple,
      light: magenta,
    },
    teal,
    lightTeal,
    darkTeal,
    purple,
    magenta,
    blue,
    black,
    white,
    gray,
  },
});

export default theme;
