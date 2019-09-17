const express = require('express')
const pessoasController = require('../controllers/pessoas')

//passagem de parametros por destructuring assignment
//la no index passou dependencies
//aqui recebeu ja extraindo a propriedade
const pessoasRouter = ({conn2}) =>{
    const router = express.Router()
    
    // router.get('/', (req, res)=> {
    //     conn.query('select * from pessoas', (err, results)=>{
    //         res.send(results)
    //     })
    // })
    
    router.get('/', pessoasController.index.bind(null, conn2))
    //outra maneira sem uso do bind
    // router.get('/', (req, res)=>{
    //     pessoasController.index(conn, req, res)
    // })
    //ainda outra maneira setando variavel funfando
    // const funfando = pessoasController.index.bind(null, conn)
    // router.get('/', funfando)


    router.get('/delete/:id', pessoasController.deleteOne.bind(null,conn2))
    router.get('/create', pessoasController.createForm)
    router.post('/create', pessoasController.createProcess.bind(null, conn2))
    router.get('/update/:id', pessoasController.updateForm.bind(null, conn2))
    router.post('/update/:id', pessoasController.updateProcess.bind(null, conn2))

    return router
}



module.exports = pessoasRouter
