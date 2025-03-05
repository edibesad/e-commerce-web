export const saveCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value}; path=/`;
};

export const getCookie = (key: string) => {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith(key));

  if (!cookie) {
    return null;
  }

  return cookie.split("=")[1];
};

export const deleteCookie = (key: string) => {
  document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
