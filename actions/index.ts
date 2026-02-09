"use server";

import prisma from "@/lib/prisma";

export const getUserById = async (matricule: string) => {
  try {
    const cleanMatricule = matricule.trim().toUpperCase().replace(/\s+/g, "");

    const user = await prisma.user.findFirst({
      where: {
        matricule: cleanMatricule,
      },
    });
    console.log("--------server---------", user);
    return { data: user };
  } catch (error) {
    console.log(error);
    return { error: "Erreur lors de la récupération de l'utilisateur" };
  }
};
