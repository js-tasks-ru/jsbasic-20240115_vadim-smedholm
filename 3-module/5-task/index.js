function getMinMax(str) {
  const numbers = str.match(/-?\d+(\.\d+)?/g) || [];
  if (numbers.length === 0) {
    return null;
  }
  const min = Math.min(...numbers.map(Number));
  const max = Math.max(...numbers.map(Number));
  return {min, max};// ваш код...
}
