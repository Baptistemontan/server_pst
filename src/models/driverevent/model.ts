import { model } from "mongoose";
import { IDriverEventDocument, IDriverEventModel } from "./types";
import DriverEventSchema from "./schema";

export const DriverEventModel = model<IDriverEventDocument, IDriverEventModel>("driverevent", DriverEventSchema);