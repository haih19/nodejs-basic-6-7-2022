
import express from "express";
import getAllUsers, { createNewUser, deleteUser, updateUser } from '../controller/apiController.js'

let router = express.Router();

const initApiRoute = (app) => {
    router.get('/users', getAllUsers) //method GET -> READ data
    router.post('/create-user', createNewUser) //method POST -> create data
    router.put('/update-user', updateUser) //method PUT -> UPDATE data
    router.delete('/delete-user/:id', deleteUser) //method DELETE -> UPDATE data


    return app.use('/api/v1', router)
}

export default initApiRoute;
