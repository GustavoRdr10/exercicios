/* A entrada de dados será:
● Número total de eleitores;
● Número de votos válidos;
● Número de votos brancos;
● Número de votos nulos.
O algoritmo deve calcular e exibir para o usuário as seguintes informações (em
relação ao total de eleitores):
● Percentual de votos válidos;
● Percentual de votos brancos;
● Percentual de votos nulos;*/
let numeroEleitores = prompt("Digite o número total de eleitores:");
let votoValido = prompt("Digite o número total de votos válidos:");
let votoBranco = prompt("Digite o número de votos em branco:");
let votoNulo = prompt("Digite o valor total de votos nulos:");
let percentualVotoValido = (100 * votoValido / numeroEleitores);
let percentualVotoBranco = (100 * votoBranco / numeroEleitores);
let percentualVotoNulo = (100 * votoNulo / numeroEleitores);
function eleitores() {   
    //votos validos    
    document.write("O percentual de votos válidos é:", percentualVotoValido, ("%"))
    document.write("<br>")
    //votos em branco    
    document.write("O percentual de votos em branco é:", percentualVotoBranco, ("%"));
    document.write("<br>")
    //votos nulos    
    document.write("O percentual de votos nulos é:", percentualVotoNulo, ("%"));
}
eleitores();