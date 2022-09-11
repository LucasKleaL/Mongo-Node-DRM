const express = require("express");
const cors = require("cors");
const mongoose = require("./util/Mongoose");
const User = require("./model/User");
const UserController = require("./controller/UserController");
const NoteController = require("./controller/NoteController");

const PORT = process.env.PORT || 3001;

let app  = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World Mongo-Node-DRM");
});

app.listen(PORT, function() {
    console.log(`Mongo-Node-DRM listening at: localhost:${PORT}`);
});

const userController = new UserController(app);
const noteController = new NoteController(app);