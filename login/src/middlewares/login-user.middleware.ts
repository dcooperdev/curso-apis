import { NextFunction } from "express";
import { IRequest, IResponse } from "../configurations/MiddlewaresInterfaces";

const { signInWithEmailAndPassword } = require("../controllers/users.controller");

export const loginUser = async (req: IRequest, res: IResponse, next: NextFunction) => {
    try {
        const user = await signInWithEmailAndPassword(req?.user?.email, req?.user?.password);
        req.response = user;
        return next();
    } catch (error: any) {
        res.status(500).json({
            messaghe: error.message
        })
    }
}

export default loginUser;