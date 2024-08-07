const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
  const data = [
    //Faça os inserts da tabela name, username, role, email, password, birth, create_at
    {name: 'João' },
    { },
    { },
  ]
  
  await prisma.user.createMany({ data });
  console.log("Usuarios inseridos com sucesso!");
}

main();