import {RegisterInput, LoginInput} from './auth.validation'
import bcrypt from "bcrypt"
import { createUser, findUserByEmail} from '../users/user.repository'

export const register = async (data: RegisterInput)=>{
    //check uf user already exists
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
