import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';

import { verifyEmail } from '../../../store/actions';

import email from '../../../images/email.png';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 350,
    margin: '0 auto',
    marginTop: 200,
    padding: 24
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    paddingLeft: 0
  },
  cover: {
    width: 125,
    height: 125
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    width: '100%'
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

const EmailVerifiedContainer = ({ sendVerificationEmail, loading, error }) => {
  const classes = useStyles();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: loading
  });
  console.log(error);
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h6" align="center">
            Correo de verificación enviado
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            recargue la pestaña despues de verificar su cuenta
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={email}
        title="Live from space album cover"
      />
      <div className={classes.wrapper}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          className={buttonClassname}
          onClick={() => sendVerificationEmail()}>
          Reenviar correo de verifiación
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
      {error && (
        <CardContent>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerificationEmail: verifyEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailVerifiedContainer);
