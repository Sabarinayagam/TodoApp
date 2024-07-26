export const loadState = () => {
  try {
    const nameState = sessionStorage.getItem("name");
    if (nameState === null) return undefined;
    return JSON.parse(nameState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const nameState = JSON.stringify(state);
    sessionStorage.setItem("name", nameState);
  } catch (err) {
    console.log(err);
  }
};
