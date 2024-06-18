import { getLocal } from "./localStorage";

const getUserProfile = async () => {
  const token = getLocal("token");

  if (token) {
    const response = await fetch("/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = await response.json();

    if (response.ok) {
      return userData;
    } else {
      throw new Error(userData.error);
    }
  } else {
    throw new Error("No token found");
  }
};

export { getUserProfile };
