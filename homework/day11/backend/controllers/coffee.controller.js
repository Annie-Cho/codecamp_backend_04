import { Coffee } from "../models/starbucks.model.js";

export class CoffeeController {
  fetchCoffee = async (req, res) => {
    const result = await Coffee.find();

    res.send(result);
  };
}
