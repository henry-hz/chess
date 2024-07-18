import { Application } from "express";
import homeRoutes from "./home.routes";
import allowanceRoutes from "./allowance.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/allowance", allowanceRoutes);
  }
}
