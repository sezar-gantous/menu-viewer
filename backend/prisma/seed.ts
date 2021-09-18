import { PrismaClient } from "@prisma/client";
import { generateMenu } from "./seeding/menu";
import { generateItems } from "./seeding/util/generateItems";
const prisma = new PrismaClient();

async function main() {
  const menus = generateItems(5, generateMenu);

  await Promise.all(
    menus.map(async (menu) => {
      await prisma.menu.create({
        data: menu,
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
