/**
 * https://getbootstrap.com/docs/3.3/getting-started/#examples
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
// const host = process.env.HOST || '0.0.0.0'
const print = (msg) => console.log(msg)

const conn2 = require('knex')({
    client: 'mysql2',
    connection:{
        host: process.env.HOST_DB,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DB,
    }
})

const pessoas = require('./routes/pessoas')

const dependencies = {
    conn2
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })

app.get('/', (req, res)=> res.render('home'))
app.use('/pessoas', pessoas(dependencies))

if(conn2){
    app.listen(port, ()=>{
        print(`CRUD Server listening on port: ${port}`)
    })
}else{
    print('Sem DB, Sem App')
}


