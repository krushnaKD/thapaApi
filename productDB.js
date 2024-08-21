require("dotenv").config();

const connectDB = require("./db/connect");
const product = require("./models/product");
const Product = require("./models/product");

const Productjson = require("./products.json")

const start = async () =>{
 try {
    await connectDB(process.env.MONGODB_URL);
    await product.deleteMany();
    await Product.create(Productjson);
    console.log("success");
    
 } catch (error) {
    console.log(error);
    
 }
}
start()