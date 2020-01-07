exports.up = function (knex) {
  return knex.schema.createTable("posts", table => {
    table.increments("id"); // create an autoincrementing column named `id` - "id" SERIAL
    table.string("username"); // "title" VARCHAR(255)
    table.text("image_url");
    table.text("content"); // "content" TEXT
    table.integer("viewCount"); // "viewCount" INTEGER
    table.timestamp("createdAt").defaultTo(knex.fn.now()); // createdAt timestamp default ot now()
    table.timestamp("updatedAt");
  });

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("posts");

};