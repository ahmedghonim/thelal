-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "providerType" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refreshToken" TEXT,
    "accessToken" TEXT,
    "accessTokenExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtpCode" (
    "id" SERIAL NOT NULL,
    "otp" TEXT NOT NULL,

    CONSTRAINT "OtpCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Home" (
    "id" SERIAL NOT NULL,
    "images" TEXT[],
    "client" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "image_1" TEXT NOT NULL,
    "image_2" TEXT NOT NULL,
    "image_3" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "aim" JSONB NOT NULL,
    "quote" JSONB NOT NULL,
    "author" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Home_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildCategory" (
    "id" SERIAL NOT NULL,
    "name" JSONB NOT NULL,

    CONSTRAINT "BuildCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Build" (
    "id" SERIAL NOT NULL,
    "images" TEXT[],
    "title" JSONB NOT NULL,
    "location" JSONB,
    "scope" JSONB,
    "year" TEXT,
    "status" JSONB,
    "team" JSONB,
    "briefing" JSONB,
    "briefing_image" TEXT,
    "buildCategoryId" INTEGER NOT NULL,
    "architectural_solution" JSONB,
    "architectural_solution_image" TEXT,

    CONSTRAINT "Build_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignCategory" (
    "id" SERIAL NOT NULL,
    "name" JSONB NOT NULL,

    CONSTRAINT "DesignCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Design" (
    "id" SERIAL NOT NULL,
    "images" TEXT[],
    "title" JSONB NOT NULL,
    "location" JSONB,
    "scope" JSONB,
    "year" TEXT,
    "status" JSONB,
    "team" JSONB,
    "briefing" JSONB,
    "briefing_image" TEXT,
    "designCategoryId" INTEGER NOT NULL,
    "architectural_solution" JSONB,
    "architectural_solution_image" TEXT,

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_providerId_providerAccountId_key" ON "Account"("providerId", "providerAccountId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_buildCategoryId_fkey" FOREIGN KEY ("buildCategoryId") REFERENCES "BuildCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_designCategoryId_fkey" FOREIGN KEY ("designCategoryId") REFERENCES "DesignCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
