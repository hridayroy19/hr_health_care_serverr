import { z } from "zod";

const createAdmin = z.object({
    password: z.string().min(1, { message: "Password is required" }),
    admin: z.object({
        name: z.string().min(1, { message: "Name is required!" }),
        email: z.string().email({ message: "Invalid email address" }),
        contactNumber: z.string().min(1, { message: "Contact Number is required!" }),
    }),
});


export const userValidation = {
    createAdmin,
}