import mongoose, { connection, mongo } from "mongoose";

export async function connect() {
  try{
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on('connected',()=>{
      console.log("MongoDb Connected Successfully")
    })

    connection.on('error',(error)=>{
      console.log("MongoDb NOT Connected Successfully" + error);
      process.exit();
    })

  }catch(error){
    console.log('Something wen wrong!');
    console.log(error);
  }
}