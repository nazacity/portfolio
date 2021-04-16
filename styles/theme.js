import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00BFBF',
    },
    secondary: {
      main: '#333333',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    success: {
      main: '#64dd17',
    },
  },
  overrides: {
    MuiLink: {
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Mitr'],
  },
});

export default theme;
