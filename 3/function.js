/* Desenvolva um algoritmo que dadas as entradas: distância do trajeto e velocidade
média da viagem, informe o tempo que uma família levará saindo de sua cidade de
férias até o destino previsto. Após o cálculo, o algoritmo deve mostrar o tempo
calculado.*/
let distancia = prompt("Digite a distancia do trajeto:");
let velocidade_media = prompt("Digite a velocidade média percorrida:");
let tempo_viagem = velocidade = (distancia / velocidade_media);
function tempoViagem() {
    document.write("O tempo da viagem foi: = ", tempo_viagem);
}
tempoViagem()