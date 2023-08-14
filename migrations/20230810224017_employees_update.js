/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable("employees", function (tableBuilder){
      tableBuilder.string("address")
      tableBuilder.string("phone_number")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable("employees", function (tableBuilder){
        tableBuilder.dropColumn("address")
        tableBuilder.dropColumn("phone_number")
    })
};
