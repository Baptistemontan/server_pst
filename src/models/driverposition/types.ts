import { Document, Model } from "mongoose";


export interface IDriverPosition {
    lat:number,
    lng:number
}


export interface IDriverPositionDocument extends IDriverPosition, Document {}
export interface IDriverPositionModel extends Model<IDriverPositionDocument> {}