import { NextFunction } from "express";
import { IRequest, IResponse } from "../../configurations/MiddlewaresInterfaces";

export const userValidation = (req: IRequest, res: IResponse, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            req.user = {
                email,
                password
            }
    
            return next();
        }
    } catch (error) {
        res.status(500).json({
            messaghe: 'Email and Password are required fields'
        })
    }

}

export default userValidation;