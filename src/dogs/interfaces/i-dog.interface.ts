import { Document } from "mongoose";

export interface IDog extends Document {
  _id: string;
  name: string;
  age: number;
  breed: string;
}
