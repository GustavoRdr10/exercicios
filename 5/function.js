/* Desenvolva um algoritmo para ler as 4 notas de um aluno em uma disciplina e exibe a
sua média simples.*/
let nota1 = parseFloat(prompt("Digite a primeira sua nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));
let nota4 = parseFloat(prompt("Digite a quarta nota"));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
function notaAluno() {
    document.write("A media do aluno foi:", media);
}
notaAluno();