-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "matricule" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_matricule_key" ON "User"("matricule");
