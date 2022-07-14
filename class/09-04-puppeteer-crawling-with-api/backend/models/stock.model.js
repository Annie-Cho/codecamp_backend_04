import mongoose from "mongoose"

//구조 작성 - schema
const StockSchema = new mongoose.Schema({
    name: String,
    date: Date,
    price: Number
})

//schema를 가지고 mongoose의 Board 컬렉션을 만든다
export const Stock = mongoose.model("Stock", StockSchema)
