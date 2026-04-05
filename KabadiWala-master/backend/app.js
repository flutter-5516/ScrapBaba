import express from "express";
import { connectDb } from "./config/mongoose.js";
const app = express();

dotenv.config();
const port = process.env.PORT;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`listening at ${port}`);
  connectDb();
});
