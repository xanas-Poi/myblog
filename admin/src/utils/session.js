const TokenKey = "xanas";

export function getToken() {
  return window.sessionStorage.getItem(TokenKey);
}

// console.log(window.sessionStorage.getItem(TokenKey));

export function setToken(token) {
  return window.sessionStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return window.sessionStorage.removeItem(TokenKey);
}
