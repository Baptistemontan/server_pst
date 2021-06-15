import { Router } from "express"
import { DriverModel } from "../models/driver/model";
import { DriverEventModel } from "../models/driverevent/model"
import { DriverEventDocToDriverEventObj } from "../functions"
import cors from "cors"

const router = Router();

router.use(cors())

router.get("/events/:driverId", (req, res) => {
    DriverEventModel.find({driverId: Number(req.params.driverId)}).then(value => {
        const val = value.map(DriverEventDocToDriverEventObj)
        res.send(JSON.stringify(val));
    }, err => {
        console.error(err)
        res.send(err)
    });
})

router.get("/drivers", (req, res) => {
    DriverModel.find({}, (err, doc) => {
        if(err) console.error(err)
        res.send(err || JSON.stringify(doc));
    })
})

export default router;