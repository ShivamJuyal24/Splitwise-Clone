import { Request, Response} from "express";
import {createGroup} from "../group/group.service"
import {createGroupSchema} from "../group/group.validation"

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