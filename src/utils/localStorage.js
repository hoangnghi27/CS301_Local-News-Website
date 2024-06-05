const saveLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocal = (key) => {
  const local = localStorage.getItem(key);
  try {
    return JSON.parse(local);
  } catch (error) {
    console.error("Error parsing JSON from local storage:", error);
    return "";
  }
};

const removeLocal = (key) => {
  localStorage.removeItem(key);
};

export { saveLocal, getLocal, removeLocal };
