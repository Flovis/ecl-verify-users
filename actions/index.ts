"use server";

import prisma from "@/lib/prisma";

const getUserById = async (employeeId: string) => {
  try {
    const user = prisma.user.findUnique({
      where: { employeeId },
    });
    return user;
  } catch (error) {}
};
