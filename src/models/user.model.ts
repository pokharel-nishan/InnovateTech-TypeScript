import { Schema, model, connect } from 'mongoose';

interface IUser {
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string
}

const UserModel = new Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "guest"],
    required: true,
  },
});

export default model<IUser>("user", UserModel);
