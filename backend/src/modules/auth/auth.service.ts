import {RegisterInput, LoginInput} from './auth.validation'
import bcrypt from "bcrypt"
import { createUser, findUserByEmail} from '../users/user.repository'
import jwt from "jsonwebtoken"
export const register = async (data: RegisterInput)=>{
    //check if user already exists
    const existingUser = await findUserByEmail(data.email);

    if(existingUser){
        throw new Error("User already exists");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    //create User
    const user = await createUser({
        name: data.name,
        email: data.email,
        password: hashedPassword,
    });

    //return user 
    return {
        id: user.id,
        name:user.name,
        email: user.email,
        createdAt: user.createdAt
    };
};

export const login = async ( data:LoginInput )=>{
    //find user by email
    const existingUser = await findUserByEmail(data.email);

    if (!existingUser) {
        throw new Error("Invalid email or password");
    }
    
    const isPasswordValid = await bcrypt.compare(
        data.password,
        existingUser.password
    );

    if(!isPasswordValid){
        throw new Error("Invalid emai or password")
    }
    
    const token = jwt.sign(
    {
        userId: existingUser.id,
    },
    process.env.JWT_SECRET!,
    {
        expiresIn: "7d",
    }
);

return {
    token,
    user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
    },
};

}
