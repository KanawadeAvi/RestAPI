require("dotenv").config();

const express =require("express");
const app = express();
const connectDB = require("./db/connect");


const PORT = process.env.PORT || 5000;

const Products_routes = require("./routes/Products")

app.get("/", (req, res) => {
    res.send("hii i am live");
});



//middleware to set router
app.use("/api/Products", Products_routes);


const start = async () => {
    try{
        
        await connectDB( process.env.MONGODB_URI);
        
        app.listen(PORT, ()=>{
            console.log( `${PORT} Yes I am Connected`)
        });
    } catch (error){
        console.log(error);
    }
};

start();