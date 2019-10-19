module.exports = function multiply(first, second) {
  if (!first || !second || typeof(first) != "number" || typeof(second) != "number") {
    return 0;
  }
  return first * second;
}
