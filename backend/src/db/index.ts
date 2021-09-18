import { PrismaClient } from "@prisma/client";

/**
 * Singleton generated db client
 */
const prisma = new PrismaClient();

export default prisma;
