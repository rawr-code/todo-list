import {
  AUTH_START,
  AUTH_END,
  AUTH_FAIL,
  AUTH_SUCCESS,
  VERIFY_START,
  VERIFY_FAIL,
  VERIFY_SUCCESS
} from '../constants/authConstants';

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_START: {
      return { ...state, loading: true, error: null };
    }

    case AUTH_END: {
      return { ...state, loading: false };
    }

    case AUTH_FAIL: {
      return { ...state, error: payload };
    }

    case AUTH_SUCCESS: {
      return { ...state, error: false };
    }

    case VERIFY_START: {
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: true, error: null }
      };
    }

    case VERIFY_FAIL: {
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: payload }
      };
    }

    case VERIFY_SUCCESS: {
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: false }
      };
    }

    default:
      return state;
  }
};
