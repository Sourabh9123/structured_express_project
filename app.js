import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/db/database.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
dotenv.config();

connectDb();
app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, MongoDB!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
