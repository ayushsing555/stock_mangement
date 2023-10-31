import mongoose, {Mongoose} from "mongoose";
const url = "mongodb+srv://stock:stock@personal.tzbghhj.mongodb.net/Stock?retryWrites=true&w=majority";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(url);
        console.log("connection successful");
    }
    catch (e) {
        console.log(e);
    }

};
export default connectMongoDb;
