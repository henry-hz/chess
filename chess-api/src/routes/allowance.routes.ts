import { Router } from "express";
import AllowanceController from "../controllers/allowance.controller";

class AllowanceRoutes {
  router = Router();
  controller = new AllowanceController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    this.router.post("/:spender/:increasedValue", this.controller.increase);

    this.router.get("/:spender/:decreasedValue", this.controller.decrease);

    this.router.get("/:spender", this.controller.read);

  }
}

export default new AllowanceRoutes().router;
