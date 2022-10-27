import { Request, Response } from "express";
import { TEmail, TPassword, TResponsePayload, TToken } from "../Types";

export interface IUser{
    email?: TEmail,
    password?: TPassword
}

export interface IRequest extends Request {
    token?: TToken,
    response?: TResponsePayload,
    user?: IUser
}

export interface IResponse extends Response {}

export interface IProcessEnv {
    [key: string]: string | undefined
}