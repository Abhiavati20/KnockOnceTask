import express from 'express';                          // importing express module

import {
    registerUser,
    getUsers
} from '../controller/userController.js';                  // importing user controller functions

// creating new routing object
const router = express.Router();

// creating some routes
// post to create a user get to get all users
router.route('/').post(registerUser).get(getUsers); 

export default router;                                  // returning the express routing object