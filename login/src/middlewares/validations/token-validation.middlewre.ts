import { NextFunction } from "express";
import { IRequest, IResponse } from "../../configurations/MiddlewaresInterfaces";

export const tokenValidation = (req: IRequest, res: IResponse, next: NextFunction) => {
    try {
      const { token } = req.headers;
      req.token = token as string;
      return next();
    } catch (error: any) {
      res.status(500).json({
        error: error.message
      })
    }
}

export default tokenValidation;