const convertToDesiredFormat = (key) => {
  const newKey = key.replace(/_/g, "");
  const finalKey = newKey.replace(/([A-Z])/g, " $1").trim();
  return finalKey.charAt(0).toLowerCase() + finalKey.slice(1);
};

const objectResponse = (object) => {
  const remappedObject = {};
  for (const key in object) {
    const newKey = convertToDesiredFormat(key);
    remappedObject[newKey] = object[key];
  }
  return remappedObject;
};

export default objectResponse;
