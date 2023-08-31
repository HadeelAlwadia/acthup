import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#fff', contrastText: '#000' },
    secondary: { main: '#f3c021', contrastText: '#000' },
    background: { paper: '#000000', default: '#ffffff' },
    common: { black: '#000', white: '#fff' },
    text: { primary: '#000', secondary: '#ffc100' },
    info :{ main: '#fff', light: '#03a9f4', dark: '#01579b', contrastText: '#f3c021' }
  }
});

export const darkTheme = createTheme({

  palette: {
    mode: 'dark',
    primary: { main: '#000', contrastText: '#fff' },
    secondary: { main: '#f3c021', contrastText: '#000' },
    background: { paper: '#000000', default: '#000' },
    common: { black: '#000', white: '#fff' },
    text: { primary: '#ffffff', secondary: '#f3c021' },
    info  :{ main: '#ffffff', light: '#03a9f4', dark: '#01579b', contrastText: '#fff' }
  }
});


