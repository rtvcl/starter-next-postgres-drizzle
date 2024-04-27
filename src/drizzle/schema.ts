import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const hello = pgTable("hello", {
    id: uuid('id').notNull().primaryKey(),
    description: text('description')
})