/* Desenvolva um algoritmo para ler as três notas de um aluno em uma disciplina e
exibe a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3).*/
let nota1 = prompt("Digite a primeira sua nota");
let nota2 = prompt("Digite a segunda nota");
let nota3 = prompt("Digite a terceira nota");
let media = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / (1 + 2 + 3);
function notaAluno() {
    alert("A média do aluno é: " + media.toFixed(2));
}
notaAluno();