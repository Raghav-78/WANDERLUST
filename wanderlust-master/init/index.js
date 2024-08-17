const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("C:/Users/DELL/Desktop/Major Project/models/listings.js");

const mongo_url="mongodb://127.0.0.1:27017/wanderlust"

main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(mongo_url);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"66129c348b85d5289fd2cce9"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();