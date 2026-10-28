/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id')
    table.string('title').notNullable()
    table.text('description').notNullable()
    table.string('github_url')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('projects')
};
