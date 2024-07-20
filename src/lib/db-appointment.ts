import { PrismaClient } from "@prisma-db-appointment/client";

declare global {
  var prismaDbAppointment: PrismaClient | undefined;
}

export const dbAppointment = global.prismaDbAppointment || new PrismaClient();

if (process.env.NODE_ENV !== "production")
  global.prismaDbAppointment = dbAppointment;
