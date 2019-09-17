const pessoas = require('../models/pessoas')

// const index = (req, res) =>{
//     res.send('Pessoas index!!!')
// }

const index = async(conn2, req, res)=>{
    // conn.query('select * from pessoas', (err, results)=>{
    //     res.send(results)
    // })
    const result = await pessoas.findAll(conn2)
    // res.send(result)
    res.render('pessoas/index', {pessoas: result})
}

const deleteOne = async(conn2, req, res) =>{
    await pessoas.deleteOne(conn2, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req, res) =>{
    res.render('pessoas/create')
}

const createProcess = async(conn2, req, res) => {
    //express nao processa body automatico
    //tudo é customizado, precisamos de um middleware
    //precisamos instalar body-parser
    // res.send(req.body)
        
    await pessoas.create(conn2, req.body)
    res.redirect('/pessoas')
}

const updateForm = async(conn2, req, res) =>{
    const pessoa = await pessoas.findById(conn2, req.params.id) 
    console.log(pessoa)
    // console.log(req.params)
    res.render('pessoas/update',{pessoa})
}

const updateProcess = async(conn2, req, res) => {
    //pode-se criar id no form do tipo hidden ou passar req.params.id
    // const log = await pessoas.update(conn, req.params.id, req.body)
    const log = await pessoas.update(conn2, req.body)
    // console.log(log)
    // res.send(req.body)
    res.redirect('/pessoas')
}


module.exports ={
    index,
    deleteOne,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}

