import { users } from "./../database/database";
export const logIn = (request) => {
  const authUser = users.find(
    (user) =>
      user.username === request.username && user.password === request.password
  );
  if (!authUser) {
    return {
      status: 403,
      message: "Invalide username or password",
      data: {}
    };
  } else {
    return {
      status: 200,
      message: "Login succesfully",
      data: authUser
    };
  }
};
