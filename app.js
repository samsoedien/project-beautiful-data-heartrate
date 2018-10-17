const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const heartdata = require("./routes/api/heartdata");
const users = require("./routes/api/users");

// Init app
const app = express();

// Morgan Middleware
app.use(morgan("dev"));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handling CORS errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// DB Config
const uri = require("./config/keys").mongoURI;
const options = {
  useNewUrlParser: true
};
mongoose
  .connect(
    uri,
    options
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

// Use Routes
app.use("/api/heartdata", heartdata);
app.use("/api/users", users);

// Morgan setup
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
