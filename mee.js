import express from "express";
import dotenv from "dotenv";

dotenv.config();


const app = express();

app.use(express.json());

// app.get("/", (req, res)  => {
//     res.send("Student attendance system is ")
// } )

app.get("/", (req, res) => {
    res.json({
        message: "Student attendance system api",
        staus: "success"
    })
})
const PORT = process.env.PORT || 6500;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`),
);