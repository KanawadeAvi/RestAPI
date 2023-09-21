const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : [true,"price must be provided"],
    },
    rating : {
        type : Number,
        required :  [true,"price must be provided"],
    },
    company : {
        type : String,
        enum: {
            values:["apple","samsung","dell","MI"],
            message:`{VALUE} is not supported`,
        },
    },
});


module.exports = mongoose.model('Product',productSchema);