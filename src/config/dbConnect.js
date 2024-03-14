import mongoose, { mongo } from "mongoose";
import connectionStringuser from "./token.js";

async function conectaNaDatabase() {
  mongoose.connect(
    `mongodb+srv://${connectionStringuser}@cluster0.2al4x1s.mongodb.net/livraria?retryWrites=true&w=majority`
  );
  return mongoose.connection;
}
export default conectaNaDatabase;
