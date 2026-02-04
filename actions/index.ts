"use server";

import prisma from "@/lib/prisma";

export const getUserById = async (matricule: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { matricule },
    });
    console.log("--------server---------", user);
    return { data: user };
  } catch (error) {
    console.log(error);
    return { error: "Erreur lors de la récupération de l'utilisateur" };
  }
};
