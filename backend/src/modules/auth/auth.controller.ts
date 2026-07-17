import {Request, Response} from "express"

import { register, login } from "./auth.service"
import { loginSchema, registerSchema } from "./auth.validation"

export const registerUser = async (req: Request, res: Response)=>{
    try{
        // validate request body
        const data = registerSchema.parse(req.body);

        //register user
        const user = await register(data);

        return res.status(201).json({
            success: true,
            message:"User registered successfully",
            data: user
        })
    }catch(error){
        if (error instanceof Error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const loginUser = async (req: Request, res: Response)=>{
    try{
        const data = loginSchema.parse(req.body);

        //login user
        const user = await login(data);

        return res.status(201).json({
            success: true,
            message:"User login successfully",
            data: user
        })

    }catch(error){
        if (error instanceof Error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}