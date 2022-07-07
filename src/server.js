import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import { } from 'dotenv/config'
import initWebRoute from './route/web.js';
// import connection from './configs/connectDB.js';

const app = express()
const port = process.env.PORT || 8080

//middleware
// setup để gửi data từ client tới server và 
// lấy data từ server về client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);
initWebRoute(app)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})