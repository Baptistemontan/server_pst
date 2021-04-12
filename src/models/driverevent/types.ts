import { Document, Model } from "mongoose";
import { IDriverPosition } from "../driverposition/types"


export interface IDriverEvent {
    driverId:number,
    eventTime:Date,
    routeId:number,
    routeName:string,
    pos: IDriverPosition,
    speed:number,
    eventType:string,
    foggy:boolean,
    rainy:boolean,
    windy:boolean,
    congestionLevel:number
}


export interface IDriverEventDocument extends IDriverEvent, Document {}
export interface IDriverEventModel extends Model<IDriverEventDocument> {}