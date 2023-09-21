const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/testing");

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