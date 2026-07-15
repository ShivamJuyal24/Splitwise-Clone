import app from "./app";
import dotenv from "dotenv";
import prisma from "./lib/prisma";
dotenv.config();

const PORT = process.env.PORT || 3000;


async function startServer(){
    try{
        await prisma.$connect();
        process.on("SIGINT", async () => {
            await prisma.$disconnect();
            process.exit(0);
        });
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    }catch(err){
        console.log("Error starting the server:", err);
        process.exit(1);
    }
}

startServer();