/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      title: 'Developer Portfolio',
      description:
        'A full-stack developer portfolio showcasing projects, technologies, and development experience.',
      github_url: 'https://github.com/example/developer-portfolio',
    },
    {
      id: 2,
      title: 'Task Manager',
      description:
        'A task management application for creating, updating, completing, and deleting tasks.',
      github_url: 'https://github.com/example/task-manager',
    },
    {
      id: 3,
      title: 'Book Library API',
      description:
        'A RESTful API for managing books, with endpoints for creating, retrieving, updating, and deleting records.',
      github_url: 'https://github.com/example/book-library-api',
    },
    {
      id: 4,
      title: 'Recipe Collection',
      description:
        'A web application for organising recipes and making it easy to browse a personal collection of meals.',
      github_url: 'https://github.com/example/recipe-collection',
    },
    {
      id: 5,
      title: 'Developer Notes',
      description:
        'A simple application for storing and managing technical notes, snippets, and programming references.',
      github_url: 'https://github.com/example/developer-notes',
    },
  ])
}
