// Atividade:
// Começar uma aplicação nova como essa que acabamos de terminar o backend.
// Nessa atividade vocês devem criar o backend de uma aplicação.
// Essa aplicação vai gerenciar as transferências de uma conta bancária. Para isso, vocês devem criar um novo database com uma tabelas com os seguintes campos: id_tranferencia, nomeCliente, valor, contaCliente.
// Na construção desse backend vocês devem desenvolver todo o crud para esse data base.

// fiz a requisição da conexão na pasta config
require('./config/conexao')
// fiz a requisição do express
const express = require('express')
// instanciei o express
const app = express()
// coloquei o número da porta que tem que ouvir a requisição
const porta = 3001

// get para ver a rota 
// app.get('/teste',(req, res)=>{
//     res.send('está funcionando')
// })

// utilizar arquivo no formato json
app.use(express.json())
// criando uma variável para armazenar todas as rotas definidas no arquivos rotas.js
const rotasTarefas = require('./rotas')
// para todas as rotas definidas no arquivo rotas.js, deve ser considerado o caminho /transferencias
app.use('/transferencias', rotasTarefas)

// o app escuta a porta 3000 e imprime a mensagem no console
app.listen(porta,()=>{
    // imprimir no console
    console.log('Servidor está rodando')
})