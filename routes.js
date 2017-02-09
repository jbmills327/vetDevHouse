var express = require("express"),
    Email = require("./controllers/myControllers");

var app = express();

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile("index.html", {
            root: './public/html'
        });
    });


    app.get("/api/emails", Email.get);
    app.post("/api/emails", Email.create);


}
