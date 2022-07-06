import connection from '../configs/connectDB.js'

let getHomepage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((element) => {
                data.push({
                    id: element.id,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    email: element.email,
                    address: element.address
                })
            });
            return res.render('index.ejs', { dataUser: JSON.stringify(data) })
        });
}


export default getHomepage
