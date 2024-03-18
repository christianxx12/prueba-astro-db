import { defineDb, defineTable, column } from "astro:db";

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    username: column.text({ unique: true }),
  },
});

const Todo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    userId: column.number({ references: () => User.columns.id }),
    categoryId: column.number({ references: () => Category.columns.id }),
  },
});

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    label: column.text({ unique: true }),
  },
});

export default defineDb({
  tables: {
    Category,
    Todo,
    User,
  },
});
