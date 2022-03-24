import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './SocketContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


ReactDOM.render(
    <ContextProvider>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </ContextProvider>
    , document.getElementById('root'));