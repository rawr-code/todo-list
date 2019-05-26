import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

const Layout = ({ children, loggedIn, emailVerified }) => (
  <>
    <Header
      title="Todo App"
      loggedIn={loggedIn}
      emailVerified={emailVerified}
    />
    <main>{children}</main>
  </>
);

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(Layout);
