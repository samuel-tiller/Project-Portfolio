/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('project_technologies').del()
  await knex('project_technologies').insert([
    {project_id: 1, technology_id: 1},
    {project_id: 1, technology_id: 2},
    {project_id: 1, technology_id: 3},
    {project_id: 1, technology_id: 4},
    {project_id: 1, technology_id: 5},
    {project_id: 2, technology_id: 1},
    {project_id: 2, technology_id: 2},
    {project_id: 2, technology_id: 3},
    {project_id: 3, technology_id: 2},
    {project_id: 3, technology_id: 3},
    {project_id: 3, technology_id: 4},
    {project_id: 3, technology_id: 5},
    {project_id: 4, technology_id: 1},
    {project_id: 4, technology_id: 2},
    {project_id: 4, technology_id: 3},
    {project_id: 5, technology_id: 1},
    {project_id: 5, technology_id: 2},
    {project_id: 5, technology_id: 4},
    {project_id: 5, technology_id: 5},
  ]);
};
