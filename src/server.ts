import fastify from 'fastify'
import { knex } from './utils/database'

const app = fastify()

app.get('/', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP Server is running'))
