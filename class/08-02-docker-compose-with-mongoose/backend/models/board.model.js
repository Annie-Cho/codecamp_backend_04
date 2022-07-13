import mongoose from "mongoose"

//구조 작성 - schema
const BoardSchema = new mongoose.Schema({
    writer: String,
    title: String,
    contents: String
})

//schema를 가지고 mongoose의 Board 컬렉션을 만든다
export const Board = mongoose.model("Board", BoardSchema)
