-- CreateTable
CREATE TABLE "reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "mark" INTEGER NOT NULL,
    "productsId" INTEGER,
    CONSTRAINT "reviews_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "products" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
