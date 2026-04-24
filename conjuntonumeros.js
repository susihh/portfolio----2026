function calcularMedida(numeros) {
    // cria a funtion e passa como parametro variavel numeros
    let soma = 0; // zera a variavel
    let totalNumeros = numeros.length; // 3 numeros 10,20,30
    for (let i = 0; < totalNumeros; i++ ) { // inicia variavel do zero e pergunta se é menor que 3 (numeros.length)
        soma += numeros[i]; // soma recebe variavel numeros somando as posiçoes [i] sendo que o for so vai ate 3.
        console.log(i); // so para mostrar na tela as posiçoes de i (ou seja do laço FOR)
        console.log(numeros); // so pra mostrar o que esta armazenando
    }
    return soma / totalNumeros;
}
console.log(calcularMedida({10, 20, 30})); // saida: 20