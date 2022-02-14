type ReturnType = {
  [key: string]: string;
};

const formatBooleanToString = (object: { [key: string]: string | boolean }) => {
  const newObject: ReturnType = {};

  for (const key in object) {
    if (typeof object[key] === 'boolean') {
      newObject[key] = object[key] ? 'Yes' : 'No';
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
};

export default formatBooleanToString;
