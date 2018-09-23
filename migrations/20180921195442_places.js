exports.up = function(knex, Promise){
    return knex.schema.createTable('places', table =>{
        table.increments();
        table.string('place_name')
        table.string('place_type')
        table.float('lat')
        table.float('long')
        table.string('details').defaultsTo('')
    })
}
  exports.down = function(knex, Promise){
    return knex.schema.dropTable('places')
    }