const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (req, res, next) => {
    queries.listPlaces().then(places => {
        res.json({places});
    }).catch(next);
});


router.get("/:id", (req, res, next) => {
    queries.readPlace(req.params.id).then(place => {
        place
            ? res.json({place})
            : res.status(404).json({message: 'place not found'})
    }).catch(next);
});


router.post("/", (req, res, next) => {
    console.log(req.body)
    queries.createPlace(req.body).then(place => {
        res.status(201).json({place});
    }).catch(next);
});

router.delete("/:id", (req, res, next) => {
    queries.deletePlace(req.params.id).then(() => {
        res.status(200).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    queries.updatePlace(req.params.id, req.body).then(place => {
        res.json({place});
    }).catch(next);
});

module.exports = router;
