import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';

import { signIn } from '../../../store/actions';

const useStyles = makeStyles(theme => ({
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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo invalido')
    .required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido')
});

const LoginContainer = ({ signIn, loading, error }) => {
  const classes = useStyles();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: loading
  });
  return (
    <Card style={{ maxWidth: 300, margin: '0 auto', marginTop: 150 }}>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await signIn(values);
          setSubmitting(false);
        }}>
        {({ isSubmitting, isValid }) => (
          <Form>
            <CardContent>
              <Typography component="h5" variant="h5" align="center" paragraph>
                Login
              </Typography>
              <Field
                type="email"
                name="email"
                placeholder="Correo electronico"
                component={TextField}
                variant="outlined"
                margin="dense"
                fullWidth
              />

              <Field
                type="password"
                name="password"
                placeholder="Contraseña"
                component={TextField}
                variant="outlined"
                margin="dense"
                fullWidth
              />
            </CardContent>
            <CardActions>
              <div className={classes.wrapper}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={!isValid || isSubmitting}
                  className={buttonClassname}>
                  Login
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </CardActions>
            <CardContent>
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
            </CardContent>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

const mapStateToProps = ({ auth: { loading, error } }) => ({
  loading,
  error
});

const mapDispatchToProps = {
  signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
