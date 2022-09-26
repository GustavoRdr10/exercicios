/* Desenvolva um algoritmo que receba o ano de nascimento de uma pessoa e o ano
atual, calcule e mostre:
a) a idade dessa pessoa em anos;
b) a idade dessa pessoa em meses;
c) a idade dessa pessoa em dias;
d) a idade dessa pessoa em semanas.*/
let nascimentoPessoa = prompt("Digite seu ano de nascimento");
let anoAtual = prompt("Digite o ano atual");
let idadeAnos = (anoAtual - nascimentoPessoa)
let idadeMeses = (idadeAnos * 12);
let idadeDias = (idadeAnos * 365);
let idadeSemanas = (idadeAnos * 52.143);
function anoNascimento() {
    //idade em anos
    document.write("A sua idade em anos é:", idadeAnos);
    //idade em meses
    document.write("<br>");
    document.write("Voce vai ter ", idadeMeses, (" meses."));
    //idade em dias
    document.write("<br>");
    document.write("Voce vai ter ", idadeDias, (" dias."));
    //idade em semanas
    document.write("<br>");
    document.write("Voce vai ter ", idadeSemanas, (" semanas."));
}
anoNascimento();