import { IDriver, IDriverDocument, IDriverModel } from "./types";

export async function createNoDup(this: IDriverModel, driver:IDriver) {
    this.updateOne({ driverId: driver.driverId }, driver, { upsert:true }, err => err && console.log(err));
}