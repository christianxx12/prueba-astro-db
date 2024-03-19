import { Category, db, Todo, User } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(User).values([
    {
      id: "user01",
      email: "pepito@gmail.com",
      username: "pepito",
    },
    {
      id: "user02",
      email: "juan@gmail.com",
      username: "juan",
    },
  ]);

  await db.insert(Category).values([
    {
      id: "category01",
      label: "productividad",
    },
    {
      id: "category02",
      label: "estudio",
    },
  ]);

  await db.insert(Todo).values([
    {
      id: "todo01",
      title: "Levantarse temprano",
      description: "Limpiar la casa antes de las 9:00 AM",
      userId: "user01",
      categoryId: "category01",
    },
    {
      id: "todo02",
      title: "Estudiar Astro DB",
      description: "Estudiar Astro DB creando proyectos",
      userId: "user02",
      categoryId: "category02",
    },
  ]);
}
