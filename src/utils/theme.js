import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#deb225',
      contrastText: '#fff',
    },
    secondary: {
      main: '#31a409',
      light: '#7fb801',
      contrastText: '#fff',
    },
    error: {
      main: '#ef4444',
      light: '#fef2f2',
      contrastText: '#1f4647',
    },
    success: {
      main: '#62b774',
      light: '#f7fee7',
      contrastText: '#1f4647',
    },
    notifyBadge: {
      main: '#ef4444',
      contrastText: '#fff',
    },
    text: {
      primary: '#1f4647',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
      '2xl': 1536,
      '2xxl': 1680,
      '3xl': 1920,
      '4xl': 2560,
    },
  },
})
