import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Logo from './../../src/components/Logo';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  app: {
    padding: 40
  },
  title: {
    margin: '20px 0px'
  }
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Typography variant="title" className={classes.title}>
          Logo
        </Typography>
        <Logo style={{ width: 50, height: 50 }}/>
        <Typography variant="title" className={classes.title}>
          Button
        </Typography>
        <Button>Purple!</Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
