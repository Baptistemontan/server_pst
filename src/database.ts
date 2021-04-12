import mongoose from 'mongoose'


export function connect() {
    mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser:true, useUnifiedTopology: true }, err => {
        if(err) {
            console.log(err)
        } else {
            console.log("connected to database.")
        }
    })
}

export function disconnect() {
    mongoose.disconnect();
    console.log("disconnected from database.");
}
