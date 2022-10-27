import { NextFunction } from "express";
import { IRequest, IResponse } from "../configurations/MiddlewaresInterfaces";

const { createUserWithEmailAndPassword } = require("../controllers/users.controller")

export const createUser = async (req: IRequest, res: IResponse, next: NextFunction) => {
    try {
        const user = await createUserWithEmailAndPassword(req?.user?.email, req?.user?.password);
        req.response = user;
        return next();
    } catch (error: any) {
        res.status(500).json({
            messaghe: error.message
        })
    }
}

export default createUser;