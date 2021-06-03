import readline from "readline";
import { parseEventLine } from './functions'
import { DriverModel } from "./models/driver/model";
import { DriverEventModel } from "./models/driverevent/model";
import * as db from "./database"

// database connection
db.connect();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("data", data => {
    const line = data.toString()
    const [currentDriver, driverEvent] = parseEventLine(line);
    DriverModel.updateOne({ driverId: currentDriver.driverId }, currentDriver, { upsert:true }, err => err && console.error(err))
    DriverEventModel.create(driverEvent)
})

// on process exit
process.on('exit', code => {
    // database disconnection
    db.disconnect();
    console.log("exit with code " + code);
});
