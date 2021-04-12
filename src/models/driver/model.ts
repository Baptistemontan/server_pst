import { model } from "mongoose";
import { IDriverDocument, IDriverModel } from "./types";
import DriverSchema from "./schema";

export const DriverModel = model<IDriverDocument, IDriverModel>("driver", DriverSchema);