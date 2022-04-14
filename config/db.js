const mongoose = require("mongoose");

let mongodbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/Todo",{useNewUrlParser :  true})
    .then(
        () =>{
            console.log("Connected to Database", process.env.DB_CONNECT);
        }
    )
    .catch(
        (e) => {
            console.log(e);
        }
    )
}

module.exports = mongodbConnect;