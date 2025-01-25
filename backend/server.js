const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const cookieparser=require("cookie-parser")
const authRoutes=require("./routes/authRoutes")
const courseRoutes=require("./routes/courseRoutes")
const badgeRoutes=require("./routes/badgeRoutes")

const app=express();
dotenv.config();

app.use(express.json());
app.use(
    cors({
      origin: 'http://localhost:5173', 
      credentials: true,              
    })
  );
app.use(cookieparser());

connectDB();

app.use("/auth",authRoutes);
app.use("/course",courseRoutes);
app.use("/badge",badgeRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port: ",process.env.PORT);
})

