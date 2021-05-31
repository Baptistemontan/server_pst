import {IDriverEvent} from "./models/driverevent/types"


declare interface ExportEvent extends Omit<IDriverEvent, "eventTime"> {
    eventTime: number
}