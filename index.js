const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection successful!")).catch((err)=>{
    console.log(err);
});
app.use(express.json());

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

app.get("/api/test",()=>console.log("TEST successful"));
app.listen(process.env.PORT || 5000,()=>{console.log("Backend Server is Running")});