const database = require("./knex-config");

module.exports = {
    listPlaces(){
        return database('places')
    },
    createPlace(place){
        return database('places')
        .insert(place)
        .returning('*')
        .then(record => record[0])
    },
    readPlace(id){
        return database('places')
        .select()
        .where('places.id', id)
    },
    updatePlace(id, place){
        return database('places')
        .update(place)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deletePlace(id){
        return database('places')
        .delete()
        .where('id', id)
    },
}