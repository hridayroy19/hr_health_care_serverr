import httpStatus from 'http-status';
import { Request, Response } from "express";
import { userService } from "./user.sevice";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import pick from '../../../shared/pick';
import { userFilterableFields } from './user.constant';
import { IAuthUser } from '../../interfaces/common';

const createAdmin = catchAsync(async (req: Request, res: Response) => {

    const result = await userService.createAdmin(req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin Created successfuly!",
        data: result
    })
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
    // console.log(req.query)
    const filters = pick(req.query, userFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    console.log(options)
    const result = await userService.getAllUsers(filters, options)
    res.status(200).json({
        success: true,
        message: "User data fetched!",
        meta: result.meta,
        data: result.data
    })
})


const createDoctor = catchAsync(async (req: Request, res: Response) => {

    const result = await userService.createDoctor(req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Doctor Created successfuly!",
        data: result
    })
});

const createPatient = catchAsync(async (req: Request, res: Response) => {

    const result = await userService.createPatient(req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient Created successfuly!",
        data: result
    })
});

const updateStatus = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await userService.updateUserStatus(req.body, id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User Status successfuly!",
        data: result
    })
});

const getMyProfile = catchAsync(async (req: Request  & { user?: IAuthUser }, res: Response) => {

    const user = req.user

        // console.log(user)
    const result = await userService.getMyProfile(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My Profile Fetched successfuly!",
        data: result
    })
});

const updateMyProfile = catchAsync(async (req: Request  & { user?: IAuthUser }, res: Response) => {

    const user = req.user

        // console.log(user)
    const result = await userService.updateMyProfile(user as IAuthUser,req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile Update successfuly!",
        data: result
    })
});


export const userController = {
    createAdmin,
    createDoctor,
    createPatient,
    updateStatus,
    getAllUser,
    getMyProfile,
    updateMyProfile
}