const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const data = [ 
    {
      title: "Astronomia",
      kind: "Eletrônica",
      artist: "Vicetone",
      album: "Astronomia",
      single: false,
      release: 2014,
      duration: new Date('1971-01-01T00:03:00Z'),
    },
    {
      title: "The Nights",
      kind: "Eletrônica",
      artist: "Avicii",
      album: "The Days / Nights",
      single: false,
      release: 2014,
      duration: new Date('1972-01-01T00:03:00Z'),
    },
    {
      title: "Wake Me Up",
      kind: "Eletrônica",
      artist: "Avicii",
      album: "True",
      single: false,
      release: 2013,
      duration: new Date('1973-01-01T00:03:00Z'),
    },
    {
      title: "Levels",
      kind: "Eletrônica",
      artist: "Avicii",
      album: "Levels",
      single: false,
      release: 2011,
      duration: new Date('1974-01-01T00:03:00Z'),
    },
    {
      title: "Hey Brother",
      kind: "Eletrônica",
      artist: "Avicii",
      album: "True",
      single: false,
      release: 2013,
      duration: new Date('1975-01-01T00:03:00Z'),
    },
  ];

  await prisma.music.createMany({ data });
  console.log("Músicas inseridas com sucesso!");
}

main();
