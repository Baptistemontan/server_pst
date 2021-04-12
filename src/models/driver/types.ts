import { Document, Model } from "mongoose";
import { IDriverPosition } from "../driverposition/types"


export interface IDriver {
    truckId:number,
    driverId:number,
    driverName:string,
    lastPos: IDriverPosition
}


export interface IDriverDocument extends IDriver, Document {}
export interface IDriverModel extends Model<IDriverDocument> {}