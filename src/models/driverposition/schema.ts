import { Schema } from "mongoose";

const DriverPositionSchema = new Schema({
    lat: Number,
    lng: Number
});

export default DriverPositionSchema;