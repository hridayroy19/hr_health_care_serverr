import { Admin, PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt"
import { Request } from "express";
import { IFile } from "../../interfaces/file";
import { fileUploader } from "../../../helpars/fileUploader";
const prisma = new PrismaClient();

const createAdmin = async (req: Request): Promise<Admin> => {

    const file = req.file as IFile;

    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
        req.body.admin.profilePhoto = uploadToCloudinary?.secure_url
    }

    const hassPassword: string = await bcrypt.hash(req.body.password, 8)

    const userData = {
        email: req.body.admin.email,
        password: hassPassword,
        role: UserRole.ADMIN
    }

    const result = await prisma.$transaction(async (transactionClient) => {
        await transactionClient.user.create({
            data: userData
        });

        const createdAdminData = await transactionClient.admin.create({
            data: req.body.admin
        });

        return createdAdminData;
    });

    return result;
};



export const userService = {
    createAdmin,
}