const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Setting up mongoose.
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/testing");

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Mongoose connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.urlencoded({
    extended: true
}));

app.use("/users", require("./Routes/create"));
app.use("/users", require("./Routes/read"));
app.use("/users", require("./Routes/update"));
app.use("/users", require("./Routes/delete"));

app.listen(3000, ()=> {
    console.log("Server is running on port 3000. Go to http://localhost:3000");
});