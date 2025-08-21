import { Prisma, PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const getAllFormDB = async (params: any) => {

const andConditaions: Prisma.AdminWhereInput[] = [];
   const adminSerchAbleFilds = ['name', 'email'];
    if (params.searchTerm) {
        andConditaions.push({
            OR: adminSerchAbleFilds.map(field => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: "insensitive"
                }
            }))
        })
    }

    console.dir(andConditaions, { depth: "inifinity" });
    const whereConditions: Prisma.AdminWhereInput = { AND: andConditaions };

    const result = await prisma.admin.findMany({
        where: whereConditions
    })
    return result
}

export const adminServer = {
    getAllFormDB
}