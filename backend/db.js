const mongoose =require('mongoose');

const mongoURI="mongodb+srv://poudyalamit20:jaishichaupari@house-rent.ppyoqqh.mongodb.net/House-Rent?retryWrites=true&w=majority";
// const mongoURI="mongodb://127.0.0.1:27017/Houserent?directConnection=true"

const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo Successfully");
    },3000)
    .catch((e)=>{
        console.log('Error:',e);
    })
}
module.exports= connectToMongo;