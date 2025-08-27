import express, { NextFunction, Request, Response } from 'express';
import { fileUploader } from '../../../helpars/fileUploader';
import { SpecialtiesController } from './specialties.controller';
import { UserRole } from '@prisma/client';
import auth from '../../middlewares/auth';
import { SpecialtiesValidtaion } from './specialties.validation';

const router = express.Router();


router.post(
    '/',
    fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = SpecialtiesValidtaion.create.parse(JSON.parse(req.body.data))
        return SpecialtiesController.inserIntoDB(req, res, next)
    }
);

router.get(
    '/',
    SpecialtiesController.getAllFromDB
);


router.delete(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    SpecialtiesController.deleteAllFromDB
);

export const SpecialtiesRoutes = router;

