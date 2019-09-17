//funcao pura. Depende unica e exclusivamente de conn
const findAll = async(conn2) =>{
    return await conn2('pessoas').select('*')

    // return new Promise((resolve, reject)=>{
    //     conn.query('select * from pessoas', (error, results)=>{
    //         if(!error) resolve(results)
    //         else reject(error)
    //     })
    // })
}

const findById = async(conn2, id) =>{
    return await conn2('pessoas').where({id: id}).first()

    // return new Promise((resolve, reject)=>{
    //     conn.query('select * from pessoas where id = '+ id, (error, results)=>{
    //         if(!error) resolve(results[0])
    //         else reject(error)
    //     })
    // })
}

const deleteOne = async(conn2, id) => {
    await conn2('pessoas').where({id: id}).del()

    // return new Promise((resolve, reject)=>{
    //     conn.query('delete from pessoas where id = ' + id + ' limit 1', (error)=>{
    //         if(error) reject(error)
    //         else resolve()
    //     })
    // })
}

const create = async(conn2, data)=>{
    await conn2('pessoas')
        .insert({
            nome: data.nome,
            nacionalidade: data.nacionalidade,
            cargo: data.cargo
        })
    // return new Promise((resolve, reject)=>{
    //     conn.query(`insert into pessoas (nome, nacionalidade, cargo) values ('${data.nome}', '${data.nacionalidade}', '${data.cargo}')`, (error)=>{
    //         if(error) reject(error)
    //         else resolve()
    //     })
    // })
}

// const update = (conn, id, data)=>{
const update = async(conn2, data)=>{
    await conn2('pessoas').where({id: data.id}).update({
        nome: data.nome,
        nacionalidade: data.nacionalidade,
        cargo: data.cargo
    })
    
    // return new Promise((resolve, reject)=>{
    //     const teste = conn.query(`update pessoas set nome='${data.nome}', nacionalidade='${data.nacionalidade}', cargo='${data.cargo}' where id = '${data.id}' `, (error)=>{
    //         if(error) reject(error)
    //         else {
    //             console.log(teste)
    //             resolve()

    //         }
    //     })
    // })
}

module.exports = {
    findAll,
    findById,
    deleteOne,
    create,
    update
}