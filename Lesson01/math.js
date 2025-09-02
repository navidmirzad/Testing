export function add(a, b) {
  return a + b;
}

export function minus(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide Zero");
  }
  return a / b;
}
