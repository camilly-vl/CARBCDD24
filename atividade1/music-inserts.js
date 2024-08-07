const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
  const data = [
    { title: 'Astronomia', kind: 'Eletrônica', artist: 'Vicetone', album: 'Astronomia', single: false, release: '2014', duration: '3:19'},
    { title: 'The Nights', kind: 'Eletrônica', artist: 'Avicii', album: 'The Days / Nights', single: false, release: '2014', duration: '2:56'},    
    { title: 'Wake Me Up', kind: 'Eletrônica', artist: 'Avicii', album: 'True', single: false, release: '2013', duration: '4:09'},
    { title: 'Levels', kind: 'Eletrônica', artist: 'Avicii', album: 'Levels', single: false, releae: '2011', duration: '3:22'},  
    { title: 'Hey Brother', kind: 'Eletrônica', artist: 'Avicii', album: 'True', single: false, release: '2013', duration: '4:14'},
  ]
  
  await prisma.music.createMany({ data });
  console.log("Músicas inseridas com sucesso!");
}

main();