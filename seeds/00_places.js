const data = [{
  id:1,
  place_name: 'Central Albuquerque',
  place_type: 'Origin',
  lat: 35.106766,
  long: -106.629181,
  details: 'Central Albuquerque'
}]


exports.seed = function(knex, Promise) {
  return knex.raw(`DELETE FROM "places"; ALTER SEQUENCE places_id_seq RESTART WITH ${data.length + 1};`)
    .then(function () {
      return knex('places').insert(data)
    })
}
