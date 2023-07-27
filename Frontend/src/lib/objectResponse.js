const convertToDesiredFormat = (key) => {
  return key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

function objectResponse(object) {
  const remappedObject = {};
  for (const key in object) {
    const newKey = convertToDesiredFormat(key);
    remappedObject[newKey] = object[key];
  }
  return remappedObject;
}
export { objectResponse };
