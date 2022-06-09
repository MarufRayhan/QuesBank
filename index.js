const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

const port = process.env.PORT || 8800;
require("dotenv").config();

//connect to Mongo
connectDB();

// const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");

const quesRoute = require("./routes/quesRoutes");
const { errorHandler } = require("./middlware/errorMiddleware");

//Mongo connection
// const url = `mongodb+srv://maruf:maruf@freecluster.urf4sp1.mongodb.net/test202?retryWrites=true&w=majority&ssl=true`;

// console.log("URL", url);
// mongoose
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database connected!"))
//   .catch((err) => console.log(err));

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("common"));

// app.use("/api/users", userRoute);
// app.use("/api/auth", authRoute);

app.use("/api/ques", quesRoute);
app.use(errorHandler);

app.listen(8800, () => {
  console.log("Backend server is running");
});
