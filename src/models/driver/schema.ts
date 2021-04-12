import { Schema } from "mongoose";
import DriverPositionSchema from '../driverposition/schema'

const DriverSchema = new Schema({
    truckId: Number,
    driverId: Number,
    driverName: String,
    lastPos: DriverPositionSchema
});

export default DriverSchema;