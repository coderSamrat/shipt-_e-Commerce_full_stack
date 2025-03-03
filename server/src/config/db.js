import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
      throw new Error("Please add your Mongo URI to .env");
}

const connectDB = async () => {
      try {
            const db = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
            console.log(`MongoDB connected: ${db.connection.host}`);
      } catch (error) {
            console.error(error);
            process.exit(1);
      }
}

export default connectDB;