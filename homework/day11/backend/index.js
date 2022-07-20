import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import { Coffee } from "./models/starbucks.model.js";
import {
  checkValidationPhone,
  createToken,
  saveToken,
  sendTokenToPhone,
  checkTokenByPhone,
  checkAuthByPhone,
} from "./phone.js";
import { UserController } from "./controllers/user.controller.js";
import { CoffeeController } from "./controllers/coffee.controller.js";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use(cors());
app.use(express.json());

const userController = new UserController();
const coffeeController = new CoffeeController();

app.get("/users", userController.fetchUsers);

app.get("/starbucks", coffeeController.fetchCoffee);

app.post("/user", userController.createUser);

app.post("/tokens/phone", async (req, res) => {
  let myToken = "";
  let result = "";
  let isValid = true;
  const phone = req.body.phone;

  //전화번호 유효성 확인
  isValid = checkValidationPhone({ phone });
  if (isValid === false) {
    return;
  }

  //토큰 생성
  myToken = createToken();
  if (myToken === false) {
    return;
  }

  //토큰 전송
  // await sendTokenToPhone({ phone, myToken })     //제출 시 주석 풀기

  //DB-tokens에 저장
  await saveToken({ phone, myToken });

  res.send("핸드폰으로 인증 문자가 전송되었습니다!");
});

app.patch("/tokens/phone", async (req, res) => {
  const phone = req.body.phone;
  const token = req.body.token;

  //토큰 일치 확인 및 반영
  const isValid = await checkTokenByPhone({ phone, token });

  res.send(isValid);
});

mongoose.connect("mongodb://my-database:27017/myData");

app.listen(3000);
