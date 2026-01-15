import express from "express";
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config(); 
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("hello from server.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
