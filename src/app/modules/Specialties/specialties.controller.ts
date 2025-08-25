import httpStatus from 'http-status';
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { SpecilitesService } from './specialities.server';

const inserIntoDB = catchAsync(async (req, res) => {
    console.log(req)
    const result = await SpecilitesService.inserIntoDB(req)

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Specilities Create successfully!",
        data: result
    })
})

const getAllFromDB = catchAsync(async (req, res) => {

    const result = await SpecilitesService.getAllFromDB()

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Retrivet  successfully!",
        data: result
    })
})

export const SpecialtiesController = {
    inserIntoDB,
    getAllFromDB
}