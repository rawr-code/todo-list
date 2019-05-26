import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles
} from '@material-ui/core';

import logo from '../../images/logo.svg';
import './logo.css';

import styles from './styles';

const Header = props => {
  const { classes, title, loggedIn } = props;

  let links;
  if (loggedIn.uid) {
    links = (
      <>
        <Button color="inherit" component={Link} to="/">
          Todos
        </Button>
        <Button color="inherit" component={Link} to="/logout">
          Logout
        </Button>
      </>
    );
  } else {
    links = (
      <>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          SignUp
        </Button>
      </>
    );
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} className="logo" alt="logo" />
        <div className={classes.root}>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </div>
        {links}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
