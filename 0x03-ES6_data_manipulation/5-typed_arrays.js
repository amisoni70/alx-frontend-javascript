export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length); // creating an array buffer with specified length
  const int8Array = new Int8Array(buffer); // creating an int8array using the buffer created

  int8Array[position] = value; // setting the value at the specified position in the int8array

  return new DataView(buffer);
}
