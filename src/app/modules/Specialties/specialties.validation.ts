import { z } from "zod";

const create = z.object({
    title: z.string(),
    description: z.string()
});

export const SpecialtiesValidtaion = {
    create
}