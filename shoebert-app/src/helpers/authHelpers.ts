const AUTH_ACCESS_TOKEN = "auth_token";
export const setAuthToken = (token: string) => {
  if (token) {
    localStorage.setItem(AUTH_ACCESS_TOKEN, token);
  } else {
    throw new Error("token not provided!");
  }
};

export const getAuthToken = () => {
  return localStorage.getItem(AUTH_ACCESS_TOKEN);
};

export const getAuthorizationHeader = () => {
  const authToken = getAuthToken();
  return { Authorization: `Bearer ${authToken}` };
};

export const removeAuthToken = () => {
  return localStorage.removeItem(AUTH_ACCESS_TOKEN);
}; 