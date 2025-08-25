import express, { NextFunction, Request, Response } from 'express';
import { fileUploader } from '../../../helpars/fileUploader';
import { SpecialtiesController } from './specialties.controller';
import { UserRole } from '@prisma/client';
import auth from '../../middlewares/auth';



const router = express.Router();

router.get(
    '/',
    SpecialtiesController.getAllFromDB
);

router.post(
    '/',
    fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = (JSON.parse(req.body.data))
        return SpecialtiesController.inserIntoDB(req, res, next)
    }
);


router.delete(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    SpecialtiesController.deleteAllFromDB
);

export const SpecialtiesRoutes = router;

