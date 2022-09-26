/* Desenvolva um algoritmo que lê o nome de um funcionário, o número de horas
trabalhadas, o valor que recebe por hora e o número de filhos. Com estas
informações, calcular o salário deste funcionário, sabendo que para cada filho, o
funcionário recebe 3% a mais, calculado sobre o salário bruto. */
let nome = prompt("Digite seu nome:");
let numeroHorasTrabalhadas = prompt("Digite o número de horas trabalhadas:");
let valorHora = prompt("Digite o valor da hora trabalhada:");
let numeroFilhos = prompt("Quantos filhos voce tem?");
function salarioFuncionario() {   
    salarioBruto = (valorHora * numeroHorasTrabalhadas)
    salarioBruto = ((3 * numeroFilhos / 100) + salarioBruto);
    document.write("O salário do funcionário será:", salarioBruto);
}
salarioFuncionario();