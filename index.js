import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});