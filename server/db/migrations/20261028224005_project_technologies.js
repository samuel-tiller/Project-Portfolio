/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('project_technologies', (table) => {
    table.integer('project_id').references('projects.id').notNullable()
    table.integer('technology_id').references('technologies.id').notNullable()
    table.primary(['project_id', 'technology_id'])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('project_technologies')
};
