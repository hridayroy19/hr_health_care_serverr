import { z } from 'zod';

// const create = z.object({
//   body: z.object({
//     email: z.string().email({ message: "Valid email is required" }),
//     name: z.string().min(1, { message: "Name is required" }),
//     profilePhoto: z.string().min(1, { message: "Profile Photo is required" }),
//     contactNumber: z.string().min(1, { message: "Contact Number is required" }),
//     registrationNumber: z.string().min(1, { message: "Registration Number is required" }),
//     experience: z.number({ error: "Experience must be a number" }),
//     gender: z.string().min(1, { message: "Gender is required" }),
//     apointmentFee: z.number({error: "Appointment Fee must be a number" }),
//     qualification: z.string().min(1, { message: "Qualification is required" }),
//     currentWorkingPlace: z.string().min(1, { message: "Current Working Place is required" }),
//     designation: z.string().min(1, { message: "Designation is required" }),
//   }),
// });

const update = z.object({
    body: z.object({
        name: z.string().optional(),
        profilePhoto: z.string().optional(),
        contactNumber: z.string().optional(),
        registrationNumber: z.string().optional(),
        experience: z.number().optional(),
        gender: z.string().optional(),
        apointmentFee: z.number().optional(),
        qualification: z.string().optional(),
        currentWorkingPlace: z.string().optional(),
        designation: z.string().optional(),
    }),
});

export const DoctorValidation = {
    // create,
    update,
};