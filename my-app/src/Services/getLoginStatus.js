export const isLogged = () => {
  return localStorage.getItem("logged");
};

export const getUserInfo = () => {
  return {
    id: localStorage.getItem("id"),
    user: localStorage.getItem("user"),
  };
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.clear();
};
