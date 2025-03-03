import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
      id: {
            type: Number,
            required: true,
            unique: true
      },
      fullname: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true,
            unique: true
      },
      password: {
            type: String,
            required: true,
            minlength: 8
      },
      address: {
            type: String,
      },
      cartData: {
            type: Object,
      }
}, { timestamps: true });

export const UserModel = mongoose.model("User", userSchema);