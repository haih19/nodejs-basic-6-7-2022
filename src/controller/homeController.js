// import connection from '../configs/connectDB.js'
import e from 'express';
import pool from '../configs/connectDB.js'

// let getHomepage = async (req, res) => {
//     let data = [];
//     connection.query(
//         'SELECT * FROM `users` ',
//         function (err, results, fields) {
//             results.map((element) => {
//                 data.push({
//                     id: element.id,
//                     firstName: element.firstName,
//                     lastName: element.lastName,
//                     email: element.email,
//                     address: element.address
//                 })
//             });
//             return res.render('index.ejs', { dataUser: data })
//         })
// }


let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [userId])

    return res.send(JSON.stringify(user[0]))
}


let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    //destructuring 
    // let demo = {
    //     name: 'mark',
    //     mail: 'mark123@gmail.com',
    //     position: 'student'
    // }
    // let {name, mail, position} = demo

    await pool.execute(
        'insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address])
    return res.redirect('/')// chuyển hướng về gethomepage
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId

    await pool.execute('delete from users where id = ?', [userId])
    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let id = req.params.id
    //destructuring
    let [user] = await pool.execute('select * from users where id = ?', [id])
    return res.render('update.ejs', { dataUser: user[0] }) //x <- y
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;

    // console.log(">>>Check data: ", req.body);

    await pool.execute("update users set firstName= ?, lastName= ?, email= ?, address= ? where id= ?", [firstName, lastName, email, address, id])
    return res.redirect('/')
}

export { getHomepage as default, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser }


//Task:
//1. build a page to display "create a new user"
//2. buil a detail page
//3. buil a edit page
