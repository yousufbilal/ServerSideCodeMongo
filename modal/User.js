import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },

});

export default model('User', userSchema);
