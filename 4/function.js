/* Desenvolva um algoritmo que receba um número digitado pelo usuário, calcule e
escreva se este número é par. */
let numeroParImpar = prompt("Digite um número");
function numero(numeroParImpar) {    
    if (numeroParImpar % 2 === 0) {
        document.write("O número é par")
    } else {
        document.write("O número é impar")
    }
}
numero(numeroParImpar);