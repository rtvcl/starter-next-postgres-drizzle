import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: './src/drizzle/schema.ts',
    out: './src/drizzle/out', // where the schema will be generated
    driver: 'pg', // the driver to use for the database pg == postgres
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!
    },
    verbose: true,
    strict: true
})