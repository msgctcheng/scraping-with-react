const router = require("express").Router();
const db = require("../models");
const path = require("path");

router.route("/fetch")
    .get((req, res)=> {
        db.Article
            .find()
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err));
    });

router.route("/save")
    .post((req, res) => {
        db.Article
            .create(req.body)
            .then(results => res.json(results))
            .catch(err => res.status(500).json(err));
});

router.route("/delete/:id")
.delete((req, res) => {
    db.Article
        .findById({ _id: req.params.id})
        .then(results => results.remove())
        .then(results => res.json(results))
        .catch(err => res.status(500).json(err));
});

module.exports = router;