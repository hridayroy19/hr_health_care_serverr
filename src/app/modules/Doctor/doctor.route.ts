import express, { Request, Response } from 'express';
import { DoctorController } from './doctor.controller';
import { UserRole } from '@prisma/client';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get(
    "/",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    DoctorController.getAllFromDB
);

router.get(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    DoctorController.getIdFromDB
);

router.patch(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    DoctorController.updateFromDB
);

// router.delete(
//     '/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//     AdminController.deleteFromDB);

// router.patch(
//     '/soft/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//     AdminController.softDeleteFromDB
// );

export const DoctorRoutes = router;