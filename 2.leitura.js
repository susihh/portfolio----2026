
const dados = require("./2.cliente.json");
console.log(dados);
console.log(typeof dados);
const clienteEmStrig = JSON.stringify(dados);
console.log(clienteEmStrig);
console.log(typeof clienteEmStrig);
console.log(clienteEmStrig.nome);
const objetoCliente = JSON.parse(clienteEmStrig);
console.log(objetoCliente);
