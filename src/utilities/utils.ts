export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateDate = (date: string) => {
  const now = new Date();
  now.setHours(now.getHours() - 1);
  const max = new Date();
  max.setDate(max.getDate() + 8);
  const isValid =
    new Date(date + "T23:59:59") >= now && new Date(date + "T23:59:59") < max;
  return isValid;
};

export const validateName = (name: string) => {
  const isValid = name.length >= 3;
  return isValid;
};

export const validateSize = (size: number) => {
  const isValid = size >= 1 && size <= 10;
  return isValid;
};
