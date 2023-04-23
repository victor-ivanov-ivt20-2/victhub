/*
  Warnings:

  - Changed the type of `day` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `week` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "day",
ADD COLUMN     "day" SMALLINT NOT NULL,
DROP COLUMN "week",
ADD COLUMN     "week" SMALLINT NOT NULL;

-- DropEnum
DROP TYPE "Day";

-- DropEnum
DROP TYPE "Week";
