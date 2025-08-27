import httpStatus from 'http-status';
import catchAsync from "../../../shared/catchAsync"
import { sendResponse } from "../../../shared/sendResponse"
import { DoctorService } from "./doctor.server"
import pick from '../../../shared/pick';
import { doctorFilterableFields } from './doctor.constants';

const getAllFromDB = catchAsync(async (req, res) => {

    const filters = pick(req.query, doctorFilterableFields);

    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await DoctorService.getAllFromDB(filters,options)

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

const updateIntoDB = catchAsync(async (req, res) => {

    const { id } = req.params;
    const result = await DoctorService.updateIntoDB(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Doctor data updated!",
        data: result
    })
});

const deleteFromDB = catchAsync(async (req , res) => {
    const { id } = req.params;
    const result = await DoctorService.deleteFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Doctor deleted successfully',
        data: result,
    });
});


const softDelete = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await DoctorService.softDelete(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Doctor soft deleted successfully',
        data: result,
    });
});

export const DoctorController = {
    getAllFromDB,
    getIdFromDB,
    updateIntoDB,
    deleteFromDB,
    softDelete
}