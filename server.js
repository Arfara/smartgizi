import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('database connected');
} catch (error) {
    console.log(error);
}

app.use(cors({ credentials: true, origin: '*' }));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
