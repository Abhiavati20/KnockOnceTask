import mongoose from 'mongoose';                    // importing mongoose module

// defining the user schema / model

const userSchema = mongoose.Schema(
    {
        name : {
            type:String,
            required:true
        },
        email: {
            type: String,
            required: true,
        },
        date : {
            type:Date,
            required:true
        },
        city : {
            type:String,
            required:true
        },
        state : {
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
);

// creating the model using the schema
const User = mongoose.model('User',userSchema);


export default User;                            // exporting the user model