import {
  ADD_TODO_START,
  ADD_TODO_END,
  ADD_TODO_FAIL,
  ADD_TODO_SUCCESS
} from '../constants/todoConstants';

// Add Todo
export const addTodo = data => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: ADD_TODO_START });
  try {
    firestore
      .collection('users')
      .doc(userId)
      .update({
        todos: firestore.FieldValue.arrayUnion(data.todo)
      });
    console.log(data.todo);

    dispatch({ type: ADD_TODO_SUCCESS });
  } catch (err) {
    dispatch({ type: ADD_TODO_FAIL, payload: err.message });
  }
  dispatch({ type: ADD_TODO_END });
};

// Remove Todo
export const removeTodo = data => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: ADD_TODO_START });
  try {
    firestore
      .collection('users')
      .doc(userId)
      .update({
        todos: firestore.FieldValue.arrayRemove(data)
      });
    console.log(data);

    dispatch({ type: ADD_TODO_SUCCESS });
  } catch (err) {
    dispatch({ type: ADD_TODO_FAIL, payload: err.message });
  }
  dispatch({ type: ADD_TODO_END });
};
