/* João Felipe recebeu seu salário de R$1.200,00 (líquido) e precisa pagar duas contas
C1 e C2. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre
cada conta, mais o percentual de 0,03% por dia de atraso. Faça um algoritmo que lê o
valor de cada uma das contas e quantos dias estão atrasadas. Calcule e mostre o
valor de cada conta paga e quanto restará do salário do João Felipe.*/
let c1 = prompt("Digite o valor da conta 1");
let c2 = prompt("Digite o valor da conta 2");
let desconto = (conta = c1 - c2);
let multa1 = (2 * c1 / 100);
let multa2 = (2 * c2 / 100);
function salario() {
    //conta 1
    document.write("O valor da conta 1 é: R$", c1);
    document.write("<br>")
    //conta 2
    document.write("O valor da conta 2 é: R$", c2);
    document.write("<br>")
    //desconto
    
    document.write("Voce recebera: R$", desconto);
    document.write("<br>")
    //multa c1 2%
    
    document.write("Sua multa para a conta 1 sera:", multa1, ("%"));
    document.write("<br>")
    //multa c2 2%
    
    document.write("Sua multa para a conta 2 sera:", multa2, ("%"));
    document.write("<br>")
    //percentual de 0,03% por dia de atraso, sendo que 30 é o numero de dias.
    percentual = (30 * 0.33)
    document.write("Sua multa por dia de atraso sera:", percentual, ("%"));
}
salario();