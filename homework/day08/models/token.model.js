import mongoose from 'mongoose';

//schema
const TokenSchema = new mongoose.Schema({
    token: String,
    phone: String,
    isAuth: Boolean
})

//token collection
export const Token = mongoose.model("Token", TokenSchema)