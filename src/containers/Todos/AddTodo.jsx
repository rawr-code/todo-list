import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Typography,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';

import { addTodo } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
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

const TodoSchema = Yup.object().shape({
  todo: Yup.string()
    .required('Este campo es requerido')
    .min(4, 'Muy corto')
});

const AddTodo = ({ addTodo, open, handleClose, loading, error }) => {
  const classes = useStyles();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: loading
  });
  return (
    <Dialog
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">ADD TODO</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            todo: ''
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await addTodo(values);
            setSubmitting(false);
            handleClose();
          }}>
          {({ isSubmitting, isValid }) => (
            <Form autoComplete="off">
              <Field
                type="text"
                name="todo"
                placeholder="Todo"
                component={TextField}
                variant="outlined"
                margin="dense"
                fullWidth
              />

              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <div className={classes.wrapper}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isValid || isSubmitting}
                    className={buttonClassname}>
                    Guardar
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </DialogActions>
              <DialogContent>
                {error && (
                  <Typography variant="body2" color="error">
                    {error}
                  </Typography>
                )}
              </DialogContent>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = ({ todos }) => ({
  loading: todos.loading,
  error: todos.error
});

const mapDispatchToProps = {
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
