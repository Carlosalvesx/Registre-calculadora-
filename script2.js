const num1=window.prompt('Digite um valor')
const num2=window.prompt('Digite outro valor')

let soma =parseInt(num1)+parseInt(num2);
let sub =parseInt(num1)-parseInt(num2);
let mult =parseInt(num1)*parseInt(num2);
let div =parseInt(num1)/parseInt(num2);

console.log(`Exemplo de números ${num1} e ${num2}`)
console.log(`Resultado`);

console.log(`${num1} + ${num2} = ${soma} `)
console.log(`${num1} - ${num2} = ${sub} `)
console.log(`${num1} * ${num2} = ${mult} `)
console.log(`${num1} / ${num2} = ${div} `)