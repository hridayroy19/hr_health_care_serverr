import { Request } from "express";
import { fileUploader } from "../../../helpars/fileUploader";
import prisma from "../../../shared/prisma"
import { IFile } from "../../interfaces/file";

const inserIntoDB = async (req: Request) => {
    const file = req.file as IFile;

    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
        req.body.icon = uploadToCloudinary?.secure_url;
    }
    const result = await prisma.specialties.create({
        data: req.body
    })

    return result
}

const getAllFromDB = async () => {
    const result = await prisma.specialties.findMany()
    return result
}

export const SpecilitesService = {
    inserIntoDB,
    getAllFromDB
}