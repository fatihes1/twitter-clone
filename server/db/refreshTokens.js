import { prisma } from ".";
export const createRefreshToken = async (refreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
};