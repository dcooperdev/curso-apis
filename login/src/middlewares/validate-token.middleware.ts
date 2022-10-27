import { NextFunction } from "express";
import { IRequest, IResponse } from "../configurations/MiddlewaresInterfaces";

const { validateToken } = require("../controllers/users.controller")

export const validateTokenMiddleware = async (req: IRequest, res: IResponse, next: NextFunction): Promise<NextFunction | void> => {
    try {
        const token = await validateToken(req.token);
        req.response = token;
        return next();
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default validateTokenMiddleware