export default function appendToEachArrayValue(array, appendString) {
  const arrayFinal = [];
  for (const idx of array) {
    arrayFinal.push(`${appendString}${idx}`);
  }

  return arrayFinal;
}
