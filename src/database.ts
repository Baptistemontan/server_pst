import mongoose from 'mongoose'


export function connect() {
    mongoose.connect("mongodb+srv://Read-PST-DB:rX0eCzG9vS5aFKbf@pst-webapp-server.lk9bx.mongodb.net/test", {useNewUrlParser:true, useUnifiedTopology: true }, err => {
        if(err) {
            console.error(err)
        } else {
            console.log("connected to database.")
        }
    })
}

export function disconnect() {
    mongoose.disconnect();
    console.log("disconnected from database.");
}
