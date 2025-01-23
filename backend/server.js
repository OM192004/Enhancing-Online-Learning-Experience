const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connectDB=require("./config/db")

const app=express();
dotenv.config();
app.use(cors());

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port: ",process.env.PORT);
})

