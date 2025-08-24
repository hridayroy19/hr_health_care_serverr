import { Gender } from "@prisma/client";
import { z } from "zod";

const createAdmin = z.object({
    password: z.string().min(1, { message: "Password is required" }),
    admin: z.object({
        name: z.string().min(1, { message: "Name is required!" }),
        email: z.string().email({ message: "Invalid email address" }),
        contactNumber: z.string().min(1, { message: "Contact Number is required!" }),
    }),
});

const createDoctor = z.object({
    password: z.string().min(1, { message: "Password is required" }),
    doctor: z.object({
        name: z.string().min(1, { message: "Name is required!" }),
        email: z.string().email({ message: "Email is required!" }),
        contactNumber: z.string().min(1, { message: "Contact Number is required!" }),
        address: z.string().optional(),
        registrationNumber: z.string().min(1, { message: "Reg number is required" }),
        experience: z.number().optional(),
        gender: z.enum([Gender.MALE, Gender.FEMALE], ({ message: "Gender is required" })),
        appointmentFee: z.number({
            message: "Appointment fee is required",
        }),
        qualification: z.string().min(1, { message: "Qualification is required" }),
        currentWorkingPlace: z.string().min(1, { message: "Current working place is required!" }),
        designaton: z.string().min(1, { message: "Designation is required!" }),
    }),
});


const createPatient = z.object({
    password: z.string().min(1, { message: "Password is required" }),
    patient: z.object({
        name: z.string().min(1, { message: "Name is required!" }),
        email: z.string().email({ message: "Email is required!" }),
        contactNumber: z.string().min(1, { message: "Contact Number is required!" }),
        address: z.string().optional(),
    }),
});


export const userValidation = {
    createAdmin,
    createDoctor,
    createPatient
}