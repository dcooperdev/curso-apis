import { IRequest, IResponse } from "../../configurations/MiddlewaresInterfaces";

export const response = (req: IRequest, res: IResponse) => {
    try {
        const { response } = req;
        return res.status(200).json({
            ...response
        });
    } catch (error: any) {
        res.status(500).json({
            messaghe: error.message
        })
    }

}

export default response;