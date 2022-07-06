import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import { } from 'dotenv/config'
import initWebRoute from './route/web.js';
// import connection from './configs/connectDB.js';

const app = express()
const port = process.env.PORT || 8080


//setup view engine
configViewEngine(app);
initWebRoute(app)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})