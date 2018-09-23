const data = [{
  id:1,
  place_name: 'Central Albuquerque',
  place_type: 'Origin',
  lat: 35.106766,
  long: -106.629181,
  details: 'Central Albuquerque'
},
{
  id: 2,
  place_name: 'Whole Foods Market',
  place_type: 'Food/grocery',
  lat: 35.10261194,
  long: -106.6046298,
  details: 'pretentious grocer'
},
{
  id: 3,
  place_name: 'Trader Joes',
  place_type: 'Food/grocery',
  lat: 35.17508999,
  long: -106.5428995,
  details: 'smaller, lot\'s of dry stock'
},
{
  id: 4,
  place_name: 'Sysco Of New Mexico',
  place_type: 'Food/Grocery',
  lat: 35.12739209,
  long: -106.6277421,
  details: 'new hub for neighborhood food delivery'
},
{
  id: 5,
  place_name: 'Occidental Life Building',
  place_type: 'Landmark',
  lat: 35.08371,
  long: -106.650617,
  details: ''
},
{
  id: 6,
  place_name: 'Alvarado Transportation Center',
  place_type: 'Landmark',
  lat: 35.0819762,
  long: -106.6478375,
  details: 'DANGER: zombie infested'
},
{
  id: 7,
  place_name: 'Old Post Office',
  place_type: 'Landmark',
  lat: 35.083951,
  long: -106.651701,
  details: 'Occasionally staffed: look for red beacon'
},
{
  id: 8,
  place_name: 'Albuquerque Surgery Center',
  place_type: 'Hospital/clinic',
  lat: 35.10156983,
  long: -106.5505911,
  details: ''
},
{
  id: 9,
  place_name: 'NextCare Urgent Care - Albequerque - Paseo Del Norte Blvd',
  place_type: 'Hospital/clinic',
  lat: 35.175265,
  long: -106.534168,
  details: ''
},
{
  id: 10,
  place_name: 'University of New Mexico Hospital',
  place_type: 'Hospital/clinic',
  lat: 35.08826734,
  long: -106.6169579,
  details: ''
},
// {
//   id: ,
//   place_name: '',
//   place_type: '',
//   lat: ,
//   long: ,
//   details: ''
// }
]


exports.seed = function(knex, Promise) {
  return knex.raw(`DELETE FROM "places"; ALTER SEQUENCE places_id_seq RESTART WITH ${data.length + 1};`)
    .then(function () {
      return knex('places').insert(data)
    })
}
