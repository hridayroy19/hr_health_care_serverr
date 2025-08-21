import { Request, Response } from "express";
import { userService } from "./user.sevice";

const createAdmin = async (req: Request, res: Response) => {
    try {

        const result = await userService.createAdmin(req.body);
        res.send(result)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error?.name || "somthing went wrong"
        })
    }
};

export const userController = {
    createAdmin,
}