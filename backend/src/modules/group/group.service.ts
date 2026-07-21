import {CreateGroupInput} from '../group/group.validation'
import prisma from "../../lib/prisma"
import {GroupRole} from "@prisma/client"

export const createGroup = async (
    data: CreateGroupInput,
    userId: string
)=>{
    return prisma.$transaction(async (tx)=>{
        const group = await tx.group.create({
            data:{
                name:data.name,
                createdById: userId
            }
        });

        await tx.groupMember.create({
            data:{
                groupId: group.id,
                userId,
                role: GroupRole.OWNER,
            }
        })

        return group;
    })
}

export const getUserGroups = async (userId: string) => {
  const groups = await prisma.group.findMany({
    where: {
      members: {
        some: {
          userId: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return groups;
};