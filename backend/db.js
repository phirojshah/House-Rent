const mongoose =require('mongoose');

const mongoURI="mongodb+srv://poudyalamit20:jaishichaupari@house-rent.ppyoqqh.mongodb.net/House-Rent?retryWrites=true&w=majority";

const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo Successfully");
    })
}
module.exports= connectToMongo;