/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("seating", (table) => {
    table.increments("seating_id").primary();
    table.integer("reservation_id").unsigned().notNullable();
    table
      .foreign("reservation_id")
      .references("reservation_id")
      .inTable("reservations")
      .onDelete("cascade");
    table.integer("table_id").unsigned().notNullable();
    table
      .foreign("table_id")
      .references("table_id")
      .inTable("tables")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("seating");
};
