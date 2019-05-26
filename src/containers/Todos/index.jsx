import React from 'react';
import { connect } from 'react-redux';
import { Grid, Fab, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Todo from './Todo';
import AddTodo from './AddTodo';

import { removeTodo } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const HomeContainer = ({ todos, removeTodo }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Grid container spacing={8} className={classes.root}>
      {todos &&
        todos.map((item, index) => (
          <Grid item xs={6} key={`${item}_${index}`}>
            <Todo title={item} onDelete={() => removeTodo(item)} />
          </Grid>
        ))}
      <Fab
        className={classes.fab}
        color="primary"
        onClick={() => handleClickOpen()}>
        <Add />
      </Fab>
      <AddTodo open={open} handleClose={handleClose} />
    </Grid>
  );
};

const mapStateToProps = ({ firebase }) => ({
  todos: firebase.profile.todos
});

const mapDispatchToProps = {
  removeTodo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
