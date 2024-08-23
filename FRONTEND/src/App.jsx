import React from 'react';
import { Container, Typography, Box, Paper, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FileUpload from './components/FileUpload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          textTransform: 'none',
        },
      },
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <Box sx={{ my: 4, width: '100%' }}>
            <Paper elevation={4} sx={{ p: 4, backgroundColor: '#ffffff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '16px', width: '100%'  }}>
              <Typography variant="h3" component="h1" gutterBottom color="primary" align="center">
                Upload Company Excel Sheet
              </Typography>
              <FileUpload />
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
};

export default App;
