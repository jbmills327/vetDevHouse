var express = require("express"),
    logger = require("morgan")("dev"),
    routes = require('./routes'),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

var app = express();

mongoose.connect("mongodb://localhost/mailing-list");




app.use(logger, bodyParser.json(), bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


routes(app);
// create an express listener on port 8080 (or whatever PORT is set to in the environment)
var PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log("server error: ", err);
        process.exit(1);
    } else {
        console.log("Server is up and listening to port", PORT);
    }
    // this will log the router stack showing the various routes and middleware functions you have defined
    // console.log(app._router.stack)
});
