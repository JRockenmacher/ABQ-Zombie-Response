const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.listPlaces().then(places => {
        response.json({places});
    }).catch(next);
});


router.get("/:id", (request, response, next) => {
    queries.readPlace(request.params.id).then(place => {
        place
            ? response.json({place})
            : response.status(404).json({message: 'place not found'})
    }).catch(next);
});


router.post("/", (request, response, next) => {
    console.log(request.body)
    queries.createPlace(request.body).then(place => {
        response.status(201).json({place});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.deletePlace(request.params.id).then(() => {
        response.status(200).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    console.log(request.params.id)
    console.log(request.body)
    queries.updatePlace(request.params.id, request.body).then(place => {
        response.json({place});
    }).catch(next);
});

module.exports = router;
