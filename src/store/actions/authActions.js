import {
  AUTH_START,
  AUTH_END,
  AUTH_FAIL,
  AUTH_SUCCESS,
  VERIFY_START,
  VERIFY_FAIL,
  VERIFY_SUCCESS
} from '../constants/authConstants';

// signUp
export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = await getFirebase();
  const firestore = await getFirestore();
  dispatch({ type: AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // verify email
    var user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        firstName: data.firstName,
        lastName: data.lastName
      });
    dispatch({ type: AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: AUTH_END });
};

// Logout
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = await getFirebase();

  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.error(err);
  }
};

// Login
export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = await getFirebase();
  dispatch({ type: AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: AUTH_END });
};

// Verify Email

export const verifyEmail = data => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = await getFirebase();
  dispatch({ type: VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: VERIFY_FAIL, payload: err.message });
  }
};
