import express, { NextFunction, Request, Response } from 'express';
import { fileUploader } from '../../../helpars/fileUploader';
import { SpecialtiesController } from './specialties.controller';



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


// router.delete(
//     '/:id',
//     auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
//     SpecialtiesController.deleteFromDB
// );

export const SpecialtiesRoutes = router;