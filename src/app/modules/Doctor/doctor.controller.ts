import httpStatus from 'http-status';
import catchAsync from "../../../shared/catchAsync"
import { sendResponse } from "../../../shared/sendResponse"
import { DoctorService } from "./doctor.server"

const getAllFromDB = catchAsync(async (req, res) => {

    const result = await DoctorService.getAllFromDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Retrivet  successfully!",
        data: result
    })
})

const getIdFromDB = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await DoctorService.getIdFromDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Doctor Get successfully!",
        data: result
    })
})

const updateFromDB = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await DoctorService.getIdFromDB(req.body, id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Doctor Update successfully!",
        data: result
    })
})


export const DoctorController = {
    getAllFromDB,
    getIdFromDB,
    updateFromDB,
}