## Getting Started

To begin testing the "hello world" column, follow these steps:

1. First, push the schema to the database by running:
```bash
npm run db:push
```
2. After successfully pushing the schema, execute the following SQL command to insert sample data:

```sql
INSERT INTO
  hello
VALUES
  (gen_random_uuid (), 'hello world');
```
