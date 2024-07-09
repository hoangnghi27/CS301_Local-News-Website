// authReducer.js
const initialState = {
    token: null,
    user: null,
    isLoggedIn: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.token,
          user: action.user,
          isLoggedIn: true
        };
      case 'LOGOUT':
        return {
          ...state,
          token: null,
          user: null,
          isLoggedIn: false
        };
      case 'AUTH_ERROR':
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default authReducer;