import { prisma } from ".";

export const createUser = async (userData) => {
    return prisma.user.create({
        data: userData
    })
}