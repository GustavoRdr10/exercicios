/* Desenvolva um algoritmo que faz a conversão de temperaturas de Fahrenheit para
Celsius, segundo a fórmula conhecida: 
C = 5/9(F-32)-->*/
let = temperaturaFahrenheit = prompt("Temperatura em graus Fahrenheit: ");
function fahrenheit(temperaturaFahrenheit) {    
    celsius = 5 * (temperaturaFahrenheit - 32) / 9;
    document.write("Temperatura em graus Celsius = ", celsius);
}
fahrenheit(temperaturaFahrenheit);


