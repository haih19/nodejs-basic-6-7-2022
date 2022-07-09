
import express from "express";
import getHomepage, { createNewUser, deleteUser, getDetailPage, getEditPage, postUpdateUser } from "../controller/homeController.js";
// import homeController from '../controller/homeController.js'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', getHomepage)
    router.get('/detail/user/:id', getDetailPage)
    router.post('/create-new-user', createNewUser)
    router.post('/delete-user', deleteUser)
    router.get('/edit-user/:id', getEditPage)
    router.post('/update-user', postUpdateUser)

    router.get('/about', (req, res) => {
        res.send("My name's mark")
    })

    return app.use('/', router)
}

export default initWebRoute;
