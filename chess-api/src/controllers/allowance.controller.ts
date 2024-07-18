import { Request, Response } from "express";
import { createPublicClient, createWalletClient, http } from 'viem'

export default class AllowanceController {

  async read(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "read allowance",
        reqParamSpender: req.params.spender
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async increase(req: Request, res: Response) {
    try {
      res.status(201).json({
        message: "increased",
        reqBody: req.body
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async decrease(req: Request, res: Response) {
    try {
      res.status(200).json({
        message: "decreased"
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

}
