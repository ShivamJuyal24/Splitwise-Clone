import {z} from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3,'Name must be at least 3 characters long')
        .max(50,'Name cannot exceed 50 characters'),
    
    email: z.email(),

    password:z
        .string()
        .min(8,'Password must be at least 8 characters log')
        .max(32,'Password cannot exceed 32 characters')

});

export const loginSchema = z.object({
    email:z.email(),
    password: z.string().min(8),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

