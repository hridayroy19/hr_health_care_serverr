
import prisma from "../../../shared/prisma"


const getAllFromDB = async () => {
    const result = await prisma.doctor.findMany()
    return result
}

const getIdFromDB = async (id: any) => {
    const result = await prisma.doctor.findUniqueOrThrow({
        where: {
            id
        }
    })
    return result
}

const updateIdFromDB = async (id: any, payload:any) => {

    const userData = await prisma.doctor.findUniqueOrThrow({
        where: {
            id: id,
        }
    })

    const result = await prisma.doctor.update({
        where: {
            id
        },
        data: payload
    })
    return result
}


export const DoctorService = {
    getAllFromDB,
    getIdFromDB,
    updateIdFromDB,
}