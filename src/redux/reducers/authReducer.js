const initialState = {
  authUser: {},
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH": {
      const newState = {
        isLoggedIn: true,
        authUser: action.payload
      };
      return newState;
    }
    case "RESET_AUTH": {
      const newState = {
        isLoggedIn: false,
        authUser: action.payload
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
