import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    // case "add_error":
    //   return { ...state, errorMessage: action.payload };
    // case "signin":
    //   return { ...state, token: action.payload };
    // case "clear_error_message":
    //   return { ...state, errorMessage: "" };
    // case "signout":
    //   return { ...state, token: null };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with email and password
    // if we sign up,modify the state to indicate the user is authenticated
    // if there is an error, modify the state to indicate there is an error message
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign in with email and password
  };
};

const signout = (dispatch) => {
  return () => {
    // make api request to sign out
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignout: false }
);
