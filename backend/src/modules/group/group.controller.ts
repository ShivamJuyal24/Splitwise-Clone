import { Request, Response} from "express";
import {createGroup, getUserGroups} from "./group.service"
import {createGroupSchema} from "./group.validation"

export const createGroupController = async(
    req: Request,
    res: Response
)=>{
    try{
        const data = createGroupSchema.parse(req.body);
        const userId = req.user.id;
        const group = await createGroup(data,userId);

        return res.status(201).json({
            success: true,
            message:"Group created Successfully",
            data: group,
        })
    }catch(error){
        
        return res.status(400).json({
            success: false,
            message:"Error Creating the Group",
            error
           
        })
    }
}

export const getMyGroupsController = async (
    req: Request,
    res: Response
)=>{
    try{
        const userId = req.user.id;
        const groups = await getUserGroups(userId);
    return res.status(200).json({
        success:true,
        message:"Groups fetched successfully",
        data: groups
    })
    }catch(error){
         return res.status(400).json({
            success: false,
            message:"Error fetching the Groups",
            error
           
        })
    }
}