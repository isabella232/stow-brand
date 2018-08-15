import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';
import 'typeface-raleway';
import './theme.css';

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
