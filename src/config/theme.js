import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#50555e',
      main: '#282c34',
      dark: '#00000d',
      contrastText: '#fff'
    },
    secondary: {
      light: '#9affff',
      main: '#61dafb',
      dark: '#10a8c8',
      contrastText: '#000'
    }
  }
});

export default theme;
