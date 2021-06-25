function count(str, char) {
  let c = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      c += 1;
    }
  }
  return c;
}

console.log(count("hola gagts", "f"));

function filter(arr) {
  return arr.filter((num) => num > 10);
}

console.log(filter([1, 2, 3, 4, 5, 10, 14, 15, 26, 78]));

function hypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

console.log(hypotenuse(6, 8));
