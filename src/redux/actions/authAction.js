export const setAuth = (payload) => {
  return {
    type: "SET_AUTH",
    payload
  };
};

export const resetAuth = (payload) => {
  return {
    type: "RESET_AUTH",
    payload
  };
};
