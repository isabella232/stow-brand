import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Logo from './../../src/components/Logo';

class App extends Component {
  render() {
    return (
      <div>
        <Typography variant="title">Logo</Typography>
        <Logo style={{ width: 50, height: 50 }}/>
      </div>
    );
  }
}

export default App;
