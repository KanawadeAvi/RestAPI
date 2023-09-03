const express =require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const Products_routes = require("./routes/Products")

app.get("/", (req, res) => {
    res.send("hii i am live");

});



//middleware to set router
app.use("/api/Products", Products_routes);


const start= async () => {
    try{
        app.listen(PORT, ()=>{
       console.log( `${PORT} Yes I am Connected`)
    });
    } catch (error){
        console.log(error);
    }
};

start();