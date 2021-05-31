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
    DriverEventModel.find({driverId: Number(req.params.driverId)}).then(value => {
        const val = value.map(DriverEventDocToDriverEventObj)
<<<<<<< HEAD
=======
        console.log(val[0])
>>>>>>> 30d8a4d1ef9b26b9516f44e2dac1dfc916cbd12a
        res.send(JSON.stringify(val));
    }, err => {
        console.error(err)
        res.send(err)
    });
})

router.get("/drivers", (req, res) => {
    DriverModel.find({}, (err, doc) => {
        if(err) console.error(err)
        res.send(err || JSON.stringify(doc.map(DriverDocToDriverObj)));
    })
})

router.options('*', cors(CorsOptions));

export default router;