/* Desenvolva o algoritmo de um programa onde o usuário irá informar um número
inteiro e o programa deve calcular e exibir o número imediatamente antecessor ao
número digitado pelo usuário.*/ 
let numero = prompt("Digite um número");
function numeroInteiro(numero) {    
    window.alert("O número antecessor é: " + String(numero - 1));
}
numeroInteiro(numero);

