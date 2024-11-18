import mongoose from "mongoose";

const connection = {};
export const connectToDB = async () => {
  try {
    // To maintain only one connection for the application
    if (connection.isConnected) {
      console.log("Using the existing connection");
      return;
    }
    // Connect to offline DB
    // console.log("mongo cnonnection str", process.env.MONGO);
    // const db = await mongoose.connect(
    //   "mongodb://localhost:27017/belhana-sameh-sedky"
    // );
    // connect to online DB
    const db = await mongoose.connect(
      "mongodb+srv://tameramer1g:TamerAmer@cluster0.lyb5jhz.mongodb.net/belhana-sameh-sedky?retryWrites=true&w=majority&appName=Cluster0"
    );
    // update the connection state
    connection.isConnected = db.connections[0].readyState;
    console.log(`Connection to the database is stablished successfuly`);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
