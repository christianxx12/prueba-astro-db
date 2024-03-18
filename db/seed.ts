import { Category, db, Todo, User } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(User).values([
    {
      id: 1,
      email: "pepito@gmail.com",
      username: "pepito",
    },
    {
      id: 2,
      email: "juan@gmail.com",
      username: "juan",
    },
  ]);

  await db.insert(Category).values([
    {
      id: 1,
      label: "productividad",
    },
    {
      id: 2,
      label: "estudio",
    },
  ]);

  await db.insert(Todo).values([
    {
      id: 1,
      title: "Levantarse temprano",
      description: "Limpiar la casa antes de las 9:00 AM",
      userId: 1,
      categoryId: 1,
    },
    {
      id: 2,
      title: "Estudiar Astro DB",
      description: "Estudiar Astro DB creando proyectos",
      userId: 2,
      categoryId: 2,
    },
  ]);
}
