import express, { Request, Response } from 'express';
import { AdminController } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { adminValidationSchemas } from './admin.validations';

const router = express.Router();

router.get("/", AdminController.getAdmin);
router.get('/:id', AdminController.getByIdFromDB);
router.patch('/:id', validateRequest(adminValidationSchemas.update), AdminController.updateIntoDB);
router.delete('/:id', AdminController.deleteFromDB);
router.patch('/soft/:id', AdminController.softDeleteFromDB);

export const adminRoutes = router;