import { useEffect } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../../store/actions';

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);
  return null;
};

const mapStateToProps = {
  logout: signOut
};

export default connect(
  null,
  mapStateToProps
)(Logout);
