import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

const Layout = ({ children, loggedIn }) => (
  <>
    <Header title="Todo App" loggedIn={loggedIn} />
    <main>{children}</main>
  </>
);

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(Layout);
