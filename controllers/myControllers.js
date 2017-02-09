var EMAIL = require("../models/models.emails.js");

module.exports = {

    create: (req, res) => {
        console.log("This is the req.body", req.body);
        var newDoc = new EMAIL(req.body);
        console.log("This is the newDoc", newDoc);
        newDoc.save((err, doc) => {
            if (err) {
                return res.send(err);
            }
            console.log("This is the doc", doc);
            res.send(doc);
        });
    },

    get: (req, res) => {
        if (req.params.id) {
            EMAIL.findOne({
                _id: req.params.id
            }, (err, docs) => {
                if (err) {
                    res.send("This is the error", err)
                }
                if (!docs) {
                    return res.send("Nothing with that id");
                }
                res.json(docs);
                // res.redirect("/inventory");
            });
        } else {
            EMAIL.find({}, (err, docs) => {
                if (err) {
                    res.send(err);
                }
                res.json(docs);
            })
        }
    },




}
