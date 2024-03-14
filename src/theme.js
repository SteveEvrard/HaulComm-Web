import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8DBDFF',
      light: '#9ecbff', // Lighter shade of primary
      dark: '#6d9ecc', // Darker shade of primary
    },
    secondary: {
      main: '#77D4FC',
      light: '#8ed7fc', // Lighter shade of secondary
      dark: '#5cb2ca', // Darker shade of secondary
    },
    background: {
      default: '#FFFFFF', // Global background color
    },
    text: {
      primary: '#333333', // Dark gray for maximum contrast on light backgrounds
    },
    // You can also customize error, warning, info, and success colors
  },
  typography: {
    fontFamily: 'Advent Pro, Arial, sans-serif',
    h1: {
      fontFamily: 'Advent Pro, Arial, sans-serif',
      fontWeight: 400, // Use numerical value here, 400 is equivalent to 'regular'
    },
  },
});

export default theme;

