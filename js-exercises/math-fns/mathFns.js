// Don't change the export values.
// You can use the function in the Math module

const round = function(inputValue) {
  let integerValue = parseInt(inputValue);
  let decimalValue = inputValue - integerValue;
  if (decimalValue <= 0.5) return integerValue;
  return integerValue + 1;
};

const power = function(number, power) {
  if (typeof number !== "number" || typeof power !== "number") return;
  let poweredValue = 1;
  for (let index = 1; index <= power; index++) {
    poweredValue *= number;
  }
  return poweredValue;
};

const sqrt = function(number) {
  for (let i = 0; i * i <= number; i++) {
    if (i * i === number) return i;
  }
  return number;
};

export { sqrt, power, round };
