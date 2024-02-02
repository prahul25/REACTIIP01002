// src/services/UserService.js
export const getUserData = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

export const updateUserData = (newUserData) => {
  const userData = getUserData();
  const updatedData = { ...userData, ...newUserData };
  localStorage.setItem("user", JSON.stringify(updatedData));
  return updatedData;
};
