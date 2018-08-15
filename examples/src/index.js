import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './../../src/ThemeProvider';
import Favicon from './../../src/Favicon';

ReactDOM.render(
  <ThemeProvider>
    <Favicon />
    <App/>
  </ThemeProvider>, document.getElementById('root'));
