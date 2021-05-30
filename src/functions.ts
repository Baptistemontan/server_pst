import { IDriverEvent, IDriverEventDocument } from "./models/driverevent/types"
import { IDriver, IDriverDocument } from "./models/driver/types"
import { IDriverPositionDocument, IDriverPosition } from "./models/driverposition/types"
import { ExportEvent } from "./exportTypes"

export function parseEventLine(line:string):[IDriver, IDriverEvent] {
    // then separate all values of the line
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

export function DriverDocToDriverObj(driverDoc:IDriverDocument) {
    const driver:IDriver = {
        truckId: driverDoc.truckId,
        driverId: driverDoc.driverId,
        driverName: driverDoc.driverName,
        lastPos: DriverPosDocToDriverPosObj(driverDoc.lastPos)
    }
    return driver;
}

export function DriverPosDocToDriverPosObj(driverPosDoc:IDriverPositionDocument|IDriverPosition) {
    const position:IDriverPosition = {
        lat: driverPosDoc.lat,
        lng: driverPosDoc.lng
    }
    return position;
}

export function DriverEventDocToDriverEventObj(driverEventDoc:IDriverEventDocument) {
    const position:ExportEvent = {
        driverId: driverEventDoc.driverId,
        eventTime: driverEventDoc.eventTime.getTime(),
        routeId: driverEventDoc.routeId,
        routeName: driverEventDoc.routeName,
        pos: DriverPosDocToDriverPosObj(driverEventDoc.pos),
        speed: driverEventDoc.speed,
        eventType: driverEventDoc.eventType,
        foggy: driverEventDoc.foggy,
        rainy: driverEventDoc.rainy,
        windy: driverEventDoc.windy,
        congestionLevel: driverEventDoc.congestionLevel,
    }
    return position;
}