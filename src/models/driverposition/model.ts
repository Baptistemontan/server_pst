import { model } from "mongoose";
import { IDriverPositionDocument, IDriverPositionModel } from "./types";
import DriverPositionSchema from "./schema";

export const DriverPositionModel = model<IDriverPositionDocument, IDriverPositionModel>("driverposition", DriverPositionSchema);