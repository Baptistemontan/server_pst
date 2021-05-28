import { Router } from "express"
import { DriverModel } from "../models/driver/model";
import { DriverEventModel } from "../models/driverevent/model"
import { DriverDocToDriverObj, DriverEventDocToDriverEventObj, DriverPosDocToDriverPosObj } from "../functions"
import cors from "cors"

//options for cors midddleware
const CorsOptions: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: "http://localhost:3000",
    preflightContinue: false,
};

const router = Router();

router.use(cors(CorsOptions))

router.get("/events/:driverId", (req, res) => {
    DriverEventModel.find({driverId: Number(req.params.driverId)},{_id:0, __v:0, pos:{_id:0}}).then(value => {
        res.send(JSON.stringify(value));
    }, err => {
        res.send(err)
    });
})

router.get("/drivers", (req, res) => {
    DriverModel.find({}, (err, doc) => {
        res.send(err || JSON.stringify(doc.map(DriverDocToDriverObj)));
    })
})

router.options('*', cors(CorsOptions));

export default router;