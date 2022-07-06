// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_basic'
});

// simple query

// with placeholder

export default connection;
