
function multiplicacao(num1: number, num2:number): number {
  return num1 * num2;
}


function ola (nome: string): string {
  return "Olá" + nome;
// return `Olá ${nome}`
}

console.log(multiplicacao(2,45));
console.log(ola("Lucas");

//Arrow Function:

const multiplicacao = (num1:number, num2:number):number => num1 * num2;

const ola = (nome:string):string => `Olá ${nome}`

console.log(multiplicacao(17,10));
console.log(ola("Maria");
