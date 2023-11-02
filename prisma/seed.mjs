import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alexa = await prisma.user.upsert({
    where: { email: "alexa@prisma.io" },
    update: {},
    create: {
      email: "alexa@prisma.io",
      name: "Alexa",
    },
  });

  const bernado = await prisma.user.upsert({
    where: { email: "bernado@prisma.io" },
    update: {},
    create: {
      email: "bernado@prisma.io",
      name: "Bernado",
    },
  });
  console.log({ alexa, bernado });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
