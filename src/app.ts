import express from "express";
import getRoute from "./routes/get"
import * as db from "./database"

const app = express();
const port = process.env.PORT || 8888;

// database connection
// db.connect();


// routes
app.use(express.json());
app.use("/get", getRoute);

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});

app.get("/", (req, res) => {
    res.send("yep thats me");
})


// on process exit
process.on('exit', code => {
    // database disconnection
    // db.disconnect();
    console.log("exit with code " + code);
});

// rX0eCzG9vS5aFKbf
// admin : H2auqWthJJRSKbF4
