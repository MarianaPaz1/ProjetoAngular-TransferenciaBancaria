// conexão é o arquivo que irá instanciar o pacote mySql
// criando constante para requerer o mysql
const mysql = require('mysql')
// criando constante para instanciar a requisição de mysql e conectar no banco de dados
const conexao = mysql.createConnection({
    // o host é ip do banco de dados
    host: 'localhost',
    // user é o nome usuário
    user: 'root',
    // passaword é a senha do banco de dados
    password: '--S--E--N--H--A',
    // port é a porta padrão do mySql
    port: 3306,
    // database é o nome do banco de dados 
    database: 'db_exercicios'

})
// instanciei a conexão constante com o connect e apliquei o erro, se não der erro, o console irá imprimir estamos conectados ao banco de dados.
conexao.connect((erro)=>{
    if(erro)throw erro
    console.log('estamos conectados com a base de dados')
})

module.exports = conexao