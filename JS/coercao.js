// Coerção (conversão) de tipos

// explicita & implicita

//  manual - explicita
// ex
const number = 10;
console.log(number, typeof number);

const convertToString = String(number);
console.log(convertToString, typeof convertToString);

console.log(Number('12345'));

const numberString = +'12345';
console.log(numberString, typeof numberString);
