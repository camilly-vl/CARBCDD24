const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const data = [ 
    {
      name: "Product 1",
      description: "This is product 1",
      price: 10.99,
      storage: 100,
      avaliation: 4.5,
      registration_data: new Date(),
    },
    {
      name: "Product 2",
      description: "This is product 2",
      price: 20.99,
      storage: 200,
      avaliation: 4.0,
      registration_data: new Date(),
    },
    {
      name: "Product 3",
      description: "This is product 3",
      price: 30.99,
      storage: 300,
      avaliation: 4.7,
      registration_data: new Date(),
    },
    {
      name: "Product 4",
      description: "This is product 4",
      price: 40.99,
      storage: 400,
      avaliation: 4.8,
      registration_data: new Date(),
    },
    {
      name: "Product 5",
      description: "This is product 5",
      price: 50.99,
      storage: 500,
      avaliation: 4.9,
      registration_data: new Date(),
    },
  ];

  await prisma.product.createMany({ data });
  console.log("Produtos inseridos com sucesso!");
}

main();
