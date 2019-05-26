import {
  ADD_TODO_START,
  ADD_TODO_END,
  ADD_TODO_FAIL,
  ADD_TODO_SUCCESS
} from '../constants/todoConstants';

const initialState = {
  error: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_START: {
      return { ...state, loading: true, error: null };
    }

    case ADD_TODO_END: {
      return { ...state, loading: false };
    }

    case ADD_TODO_FAIL: {
      return { ...state, error: payload };
    }

    case ADD_TODO_SUCCESS: {
      return { ...state, error: false };
    }

    default:
      return state;
  }
};
