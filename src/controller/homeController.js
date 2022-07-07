// import connection from '../configs/connectDB.js'
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


export { getHomepage as default, getDetailPage }

