import mongoose from 'mongoose'                 // importing mongoose module

// connecting to database function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://abhi1234:abhi1234@cluster0.alczb.mongodb.net/appointmentform?retryWrites=true&w=majority", 
    {
      useUnifiedTopology: true,                 // constantly checking the status of connection
      useNewUrlParser: true,                    // inorder to fallback to old parser
      useCreateIndex: true,                     // make Mongoose's default index build use
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
}

export default connectDB;                       // export the connectDB function