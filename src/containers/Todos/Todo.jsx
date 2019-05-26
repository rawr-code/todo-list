import React from 'react';

import { Card, CardHeader, IconButton, makeStyles } from '@material-ui/core';

import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  }
}));

const TodoContainer = ({ title, onDelete }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
        }
        title={title}
      />
    </Card>
  );
};

export default TodoContainer;
