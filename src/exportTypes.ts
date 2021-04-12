import {IDriverEvent} from "./models/driverevent/types"


export interface ExportEvent extends Omit<IDriverEvent, "eventTime"> {
    eventTime: number
}