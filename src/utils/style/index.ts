export function convertToRem(obj: { [key: string]: number | string }) {
  const remObject: { [key: string]: number | string } = {};
  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "number") {
      remObject[key] = key !== "fontWeight" ? value / 10 + "rem" : value;
    } else {
      remObject[key] = value;
    }
  }
  return remObject;
}
