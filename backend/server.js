import express   from 'express';                      // importing express framework
import colors    from 'colors';                       // importing colors library
import dotenv    from 'dotenv';                       // importing dotenv module inorder to load env variables
import path      from 'path'
import connectDB from './config/db.js'                // importing connect to database functionality  

import userRoute from './route/userRoute.js';

// connecting to database
connectDB();

// configuring dotenv module (always configure the module then make use of those variables)
dotenv.config();


// initializing express app
const app = express();

// parse incoming request with json payload
app.use(express.json());

// defining user route
app.use('/api/users', userRoute)

// defining the port & mode variable on which the backend server will run
const MODE = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve()
if(process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '/frontend/build')))  
        app.get('*', (req, res) =>
            res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
        )
    } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
}

// listening the app on port 5000 by loging a message on local console(terminal).
app.listen(
    PORT,
    console.log(
        `server running in ${MODE} on ${PORT}`.yellow.bold
    )
)


