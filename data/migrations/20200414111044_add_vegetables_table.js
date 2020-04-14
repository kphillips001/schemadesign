// the .up() describes the changes to the database schema
exports.up = function (knex) {
  return knex.schema.createTable("veggies", tbl => {
    // a primary key, called id that autoincrements
    tbl.increments("id");

    // an index make searching for a value in a column a LOT faster
    tbl.string("name", 255).notNullable().unique().index();
  });
};

// he .down() describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};

// knex migrate:make add_veggies
// delete the database file
// knex migrate:latest
// knex migrate:rollback to undo the changes
