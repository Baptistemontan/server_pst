import { Schema } from "mongoose";
import DriverPositionSchema from '../driverposition/schema'

const DriverEventSchema = new Schema({
    driverId: Number,
    eventTime: Date,
    routeId: Number,
    routeName: String,
    pos: DriverPositionSchema,
    speed: Number,
    eventType: String,
    foggy: Boolean,
    rainy: Boolean,
    windy: Boolean,
    congestionLevel: Number
});

export default DriverEventSchema;