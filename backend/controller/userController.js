import asyncHandler from 'express-async-handler'                // importing express-sync handler module
import User         from '../model/userModel.js';                  // importing the user model

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    
    // collecting the data from request
    const { name, email, date, city, state } = req.body
  
    // creating a user using the data 
    const user = await User.create({
      name,
      email,
      date,
      city,
      state
    });
    
    // if user is created pass its json data else give error message
    if (user) {
      res.status(201).json({
        _id:   user._id,
        name:  user.name,
        email: user.email,
        date:  user.date,
        city:  user.city,
        state: user.state,
      });
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
});

// @desc    Get all users
// @route   GET /api/users
// @access  public
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

// exporting the required functions
export {registerUser,getUsers};