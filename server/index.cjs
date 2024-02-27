const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const userRoutes = require("./routes/Users");
const questionRoutes = require("./routes/Questions");
const answerRoutes = require("./routes/Answers");
const chatbotRoutes = require("./routes/Chatbot");
const connectDB = require("./config/connectDB");
const otpRoutes = require("./routes/Otp");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.use("/chatbot", chatbotRoutes);
app.use("/otp", otpRoutes);

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone's API by Gautam Jha");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgBlue.white);
});
