import prisma from "../../lib/prisma";

interface CreateUserInput {
    name: string,
    email: string,
    password: string
}

export const createUser = async (data: CreateUserInput)=>{
    return prisma.user.create({
        data,
    });
};

export const findUserByEmail = async(email: string)=>{
    return prisma.user.findUnique({
        where:{
            email,
        }
    })
}

export const findUserById = async(id: string)=>{
    return prisma.user.findUnique({
        where:{
            id,
        }
    })
}