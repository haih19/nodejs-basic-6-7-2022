
import express from "express";
import getHomepage from "../controller/homeController.js";
import homeController from '../controller/homeController.js'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', getHomepage)

    router.get('/about', (req, res) => {
        res.send("My name's mark")
    })

    return app.use('/', router)
}

export default initWebRoute;
