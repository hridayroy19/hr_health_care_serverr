import express from 'express';
import { DoctorController } from './doctor.controller';
import { UserRole } from '@prisma/client';
import auth from '../../middlewares/auth';
import { DoctorValidation } from './doctor.validation';
import validateRequest from '../../middlewares/validateRequest';

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
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR),
    validateRequest(DoctorValidation.update),
    DoctorController.updateIntoDB
);

router.delete(
    '/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    DoctorController.deleteFromDB);

router.patch(
    '/soft/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    DoctorController.softDelete
);

export const DoctorRoutes = router;