// criei uma constante para requerer o express e estou 
const rotas = require('express').Router()
// chamei novamente a conexão da pasta config
const conexao = require('./config/conexao')
// rota para listar os dados da base de dados, ou seja, listar todas as tarefas
rotas.get('/', (req,res)=>{
    // selecionar todos os dados da tabela exercicios
    let sql = 'select * from tb_exercicios'
    conexao.query(sql,(erro,rows,fields)=>{
        // se der erro, aplica a exceção e pare tudo
        if(erro)throw erro
        // se não,aplique json nas linhas
        res.json(rows)
    })
})

//rota para mostrar apenas uma tarefa, de acordo apenas com id
rotas.get('/:id', (req,res)=>{
    // constante do atributo fazendo uma requisição
    const {id} = req.params
    // ordenando todas as seleções em ordem alfabética
    let sql = 'select * from tb_exercicios where id_tranferencia = ?'
    // chamando a conexão com a query, instanciando a let, mandando o atributo, erro, linhas e conteúdo do banco de dados.
    conexao.query(sql,[id], (erro, rows, fields)=>{
        if(erro)throw erro
        res.json(rows[0])
    })
})

//rota para deletar uma tarefa específica (através do seu id)
rotas.delete('/:id', (req,res)=>{
    const{id} = req.params
    // feito a variável para imprimir na tabela e referindo onde deve apagar
    let sql = `delete from tb_exercicios where id_tranferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        // se der erro, aplicar a exceção
        if(erro)throw erro
        // se não, imprima o status
        res.json({status:'tarefa excluída com sucesso'})
    })
})

//rota para fazer uma inclusão na tabela de tarefas - postagem de conteúdo
rotas.post('/', (req,res)=>{
    // diferente dos outros, faz uma requisição ao body
    const {nomeCliente,valor,contaCliente} = req.body
    // pede para inserir dentro da tabela as informações dos atributos 
    let sql = `insert into tb_exercicios(nomeCliente,valor, contaCliente) values('${nomeCliente}','${valor}', '${contaCliente}')`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:"Tarefa incluída com sucesso"})
    })
})


rotas.put('/:id', (req, res) => {
    const {id} = req.params
    const {nomeCliente, valor, contaCliente} = req.body
    let sql = `update tb_exercicios set nomeCliente = '${nomeCliente}', valor = '${valor}', contaCliente = '${contaCliente}' where id_tranferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({status: "tarefa editada com sucesso"})
    })
})
module.exports = rotas