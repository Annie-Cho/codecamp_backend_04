import { BoardService } from "./services/board.service.js"

export class BoardController {
    fetchBoard = (req, res) => {
        const result = [
            { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요" },
            { number: 1, writer: "영희", title: "영희 제목입니다~~", contents: "영희 내용이에요" },
            { number: 1, writer: "훈이", title: "훈이 제목입니다~~", contents: "훈이 내용이에요" }
        ]

        res.send(result)
    }

    createBoard = (req, res) => {
        const writer = req.body.writer
        const title = req.body.title
        const contents = req.body.contents
        const boardService = new BoardService()

        const hasInserted = boardService.checkAllInserted(writer, title, contents)

        if(hasInserted)
            res.send("게시물 등록에 성공하였습니다.")
    }
}