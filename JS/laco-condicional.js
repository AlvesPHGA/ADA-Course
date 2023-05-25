// Laço condicional
// while

const input = require('readline-sync');

const numberMachine = 6;

let numberUser = Number(input.question('Qual o seu numero?'));

while (numberUser !== numberMachine) {
   console.log('Voce errou. Tente novamente...');
   numberUser = Number(input.question('Qual o seu numero?'));
}

console.log('Voce acertou');
