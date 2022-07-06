import express from "express";
import homeController from '../controller/homeController.js'
// import getHomepage from '../controller/homeController.js'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)

    router.get('/about', (req, res) => {
        res.send("My name's mark")
    })

    return app.use('/', router)
}

export default initWebRoute;

// import express from "express";
// import homeController from '../controller/homeController';
// let router = express.Router();

// const initWebRoute = (app) => {
//     router.get('/', homeController.getHomepage);
//     router.get('/about', (req, res) => {
//         res.send(`I'm Eric!`)
//     })

//     return app.use('/', router)
// }


// export default initWebRoute;