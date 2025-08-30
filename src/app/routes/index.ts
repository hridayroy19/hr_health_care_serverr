import express from 'express';
import { userRoutes } from '../modules/User/user.routes';
import { adminRoutes } from '../modules/admin/admin.router';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { SpecialtiesRoutes } from '../modules/Specialties/specialties.routes';
import { DoctorRoutes } from '../modules/Doctor/doctor.route';
import { PatientRoutes } from '../modules/Patient/patient.route';
import { ScheduleRoutes } from '../modules/Schedule/schedule.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/admin',
        route: adminRoutes
    },
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/Specialties',
        route: SpecialtiesRoutes
    },
    {
        path: '/doctor',
        route: DoctorRoutes
    },
    {
        path: '/patient',
        route: PatientRoutes
    },
    {
        path: '/schedule',
        route: ScheduleRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;