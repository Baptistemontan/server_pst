import express from "express";
import readline from "readline";
import { parseEventLine } from './functions'
import getRoute from "./routes/get"
import { DriverModel } from "./models/driver/model";
import { DriverEventModel } from "./models/driverevent/model";
import * as db from "./database"
import { spawn } from "child_process";


const app = express();
const port = 8888;
const pyScriptPath = "./src/test.py"

// database connection
db.connect();

const pyProcess = spawn("python", [pyScriptPath])

pyProcess.stdout.on("data", data => {
    const line = data.toString()
    const [currentDriver, driverEvent] = parseEventLine(line);
    DriverModel.updateOne({ driverId: currentDriver.driverId }, currentDriver, { upsert:true }, err => err && console.error(err))
    DriverEventModel.create(driverEvent)
})

pyProcess.stderr.on("data", data => {
    console.error(data.toString())
})

pyProcess.on('close', () => {
    console.log('pyprocess close');
});

pyProcess.on('exit', () => {
    console.log('pyprocess exit');
});


pyProcess.on('disconnect', () => {
    console.log('pyprocess disconnect');
})

// routes
app.use(express.json());
app.use("/get", getRoute);

app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});



// on process exit
process.on('exit', code => {
    // database disconnection
    db.disconnect();
    console.log("exit with code " + code);
});
