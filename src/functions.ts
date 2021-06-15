import { IDriverEvent, IDriverEventDocument } from "./models/driverevent/types"
import { IDriver } from "./models/driver/types"
interface ExportEvent extends Omit<IDriverEvent, "eventTime"> {
    eventTime: number
}

export function parseEventLine(line:string):[IDriver, IDriverEvent] {
    // separate all values of the line
    const parsedLine = line.split('|');
    // get the driver ID
    const currentDriver:IDriver = {
        truckId: Number(parsedLine[1]),
        driverId: Number(parsedLine[2]),
        driverName: parsedLine[3],
        lastPos: {
            lat: Number(parsedLine[6]),
            lng: Number(parsedLine[7])
        }
    }
    // construct the event
    const event:IDriverEvent = {
        driverId: currentDriver.driverId,
        eventTime: new Date(Number(parsedLine[0])),
        routeId: Number(parsedLine[4]),
        routeName: parsedLine[5],
        pos: currentDriver.lastPos,
        speed: Number(parsedLine[8]),
        eventType: parsedLine[9],
        foggy: parsedLine[10] == "1",
        rainy: parsedLine[11] == "1",
        windy: parsedLine[12] == "1",
        congestionLevel: Number(parsedLine[13])
	}
	return [currentDriver, event];
}

export function DriverEventDocToDriverEventObj(driverEventDoc:IDriverEventDocument) {
    const position:ExportEvent = {
        ...driverEventDoc,
        eventTime: driverEventDoc.eventTime.getTime(),
    };
    return position;
}