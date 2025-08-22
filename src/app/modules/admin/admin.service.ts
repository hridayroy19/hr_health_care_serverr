import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../helpars/paginationHelper";
import { adminSearchAbleFields } from "./admin.constant";
import prisma from "../../../helpars/prisma";


const getAllFromDB = async (params: any, options: any) => {
    const { page, limit, skip } = paginationHelper.calculatePagination(options);
    const { searchTerm, ...filterData } = params;
    const andCondions: Prisma.AdminWhereInput[] = [];

    //console.log(filterData);
    if (params.searchTerm) {
        andCondions.push({
            OR: adminSearchAbleFields.map(field => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    };

    if (Object.keys(filterData).length > 0) {
        andCondions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        })
    }

    //console.dir(andCondions, { depth: 'inifinity' })
    const whereConditons: Prisma.AdminWhereInput = { AND: andCondions }

    const result = await prisma.admin.findMany({
        where: whereConditons,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder ? {
            [options.sortBy]: options.sortOrder
        } : {
            createdAt: 'desc'
        }
    });
    return result;
}

export const adminServer = {
    getAllFromDB
}