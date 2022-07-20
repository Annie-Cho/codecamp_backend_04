import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import { UserController } from "./controllers/user.controller.js";
import { CoffeeController } from "./controllers/coffee.controller.js";
import { TokenController } from "./controllers/token.controller.js";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.use(cors());
app.use(express.json());

const userController = new UserController();
const coffeeController = new CoffeeController();
const tokenController = new TokenController();

app.get("/users", userController.fetchUsers);

app.get("/starbucks", coffeeController.fetchCoffee);

app.post("/user", userController.createUser);

app.post("/tokens/phone", tokenController.sendToken);

app.patch("/tokens/phone", tokenController.checkToken);

mongoose.connect("mongodb://my-database:27017/myData");

app.listen(3000);
