import { Request, Response } from "express";
import { adminServer } from "./admin.service";


const getAdmin = async (req: Request, res: Response) => {
    try {
        const result = await adminServer.getAllFormDB(req.query)
        res.status(200).json({
            success: true,
            message: "Admin get succesfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error?.name || "somthing went wrong"
        })
    }

}

export const adminController = {
    getAdmin
}