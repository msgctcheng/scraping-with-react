const router = require("express").Router();
const db = require("../models");

router.route("/api/saved")
    .get((req, res)=> {
        db.nytreact
            .find()
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err));
    });

router.route("/api/saved")
    .post((req, res) => {
        db.Todo
            .create(req.body)
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err));
});

router.route("/api/saved")
.delete((req, res) => {
    db.Todo
        .findById({ _id: req.params.id})
        .then(results => results.remove())
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err));
});