import path from "path";
import * as XLSX from "xlsx";
import prisma from "@/lib/prisma";
import "dotenv/config";
import { UserStatus } from "@/lib/utils";

async function main() {
  const filePath = path.join(__dirname, "users.xlsx");

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const rows: any[] = XLSX.utils.sheet_to_json(sheet, {
    defval: "",
  });

  //   console.log("rows", rows);

  for (const row of rows) {
    if (!row.matricule) continue;

    console.log("row", row);

    await prisma.user.upsert({
      where: { matricule: String(row.matricule).trim().toLocaleUpperCase() },
      update: {},
      create: {
        matricule: String(row.matricule).trim().toLocaleUpperCase(),
        nom: String(row.nom).trim().toLocaleUpperCase(),
        postnom: String(row.postnom).trim().toLocaleUpperCase(),
        prenom: String(row.prenom).trim().toLocaleUpperCase(),
        fonction: String(row.fonction).trim().toLocaleUpperCase(),
        status:
          String(row.status).trim() === "Inactif"
            ? UserStatus.Inactif
            : UserStatus.Actif,
      },
    });
  }

  console.log("✅ Seed Excel terminé avec succès");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
