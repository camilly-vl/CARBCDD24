const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      name: "User1",
      username: "user1",
      role: "ADMIN",
      email: "user1@example.com",
      password: "password1",
      birth: new Date("1990-01-01"),
      created_at: new Date("2024-01-01"),
    },
    {
      name: "User2",
      username: "user2",
      role: "ADMIN",
      email: "user2@example.com",
      password: "password2",
      birth: new Date("1990-02-02"),
      created_at: new Date("2024-02-02"),
    },
    {
      name: "User3",
      username: "user3",
      role: "ADMIN",
      email: "user3@example.com",
      password: "password3",
      birth: new Date("1990-03-03"),
      created_at: new Date("2024-03-03"),
    },
    {
      name: "User4",
      username: "user4",
      role: "ADMIN",
      email: "user4@example.com",
      password: "password4",
      birth: new Date("1990-04-04"),
      created_at: new Date("2024-04-04"),
    },
    {
      name: "User5",
      username: "user5",
      role: "ADMIN",
      email: "user5@example.com",
      password: "password5",
      birth: new Date("1990-05-05"),
      created_at: new Date("2024-05-05"),
    },
  ];

  await prisma.user.createMany({ data });
  console.log("Usuarios inseridos com sucesso!");
}

main();
