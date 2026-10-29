/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('technologies').del()
  await knex('technologies').insert([
    {id: 1, name: 'React'},
    {id: 2, name: 'TypeScript'},
    {id: 3, name: 'SQLite'},
    {id: 4, name: 'Knex'},
    {id: 5, name: 'Express'}
  ]);
};
