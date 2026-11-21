-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'STUDENT');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "OtpPurpose" AS ENUM ('ADMIN_PASSWORD_RESET', 'STUDENT_PASSWORD_RESET');

-- CreateEnum
CREATE TYPE "CourseMode" AS ENUM ('ONLINE', 'OFFLINE');

-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'CONTACTED', 'RESPONDED', 'NOT_INTERESTED', 'ADMITTED');

-- CreateEnum
CREATE TYPE "MaterialSection" AS ENUM ('NOTES', 'SAMPLE_PAPERS');

-- CreateEnum
CREATE TYPE "MaterialFileType" AS ENUM ('PDF', 'DOCX');

-- CreateEnum
CREATE TYPE "MaterialAccess" AS ENUM ('FREE', 'RESTRICTED');

-- CreateEnum
CREATE TYPE "FeeMonth" AS ENUM ('APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER', 'JANUARY', 'FEBRUARY', 'MARCH');

-- CreateEnum
CREATE TYPE "FeeStatus" AS ENUM ('PAID', 'UNPAID');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('UPI', 'CASH');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "passwordHash" TEXT NOT NULL,
    "status" "AccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "classId" TEXT NOT NULL,
    "academicSessionId" TEXT NOT NULL,
    "guardianName" TEXT NOT NULL,
    "guardianPhone" TEXT NOT NULL,
    "admissionDate" DATE NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastActivityAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetOtp" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "purpose" "OtpPurpose" NOT NULL,
    "codeHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "resendAvailableAt" TIMESTAMP(3) NOT NULL,
    "failedAttempts" INTEGER NOT NULL DEFAULT 0,
    "consumedAt" TIMESTAMP(3),
    "invalidatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PasswordResetOtp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Board" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "boardId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photoObjectKey" TEXT,
    "description" TEXT,
    "courseMode" "CourseMode" NOT NULL,
    "courseDuration" TEXT NOT NULL,
    "courseFees" DECIMAL(10,2) NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicSession" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcademicSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photoObjectKey" TEXT,
    "experienceYears" INTEGER NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherQualification" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeacherQualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherSubject" (
    "teacherId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeacherSubject_pkey" PRIMARY KEY ("teacherId","subjectId")
);

-- CreateTable
CREATE TABLE "StudentSubject" (
    "studentId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudentSubject_pkey" PRIMARY KEY ("studentId","subjectId")
);

-- CreateTable
CREATE TABLE "Enquiry" (
    "id" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "boardName" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW',
    "internalNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialCategory" (
    "id" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "section" "MaterialSection" NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaterialCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialFile" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "displayTitle" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "fileType" "MaterialFileType" NOT NULL,
    "mimeType" TEXT NOT NULL,
    "sizeBytes" BIGINT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "access" "MaterialAccess" NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaterialFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoPlaylist" (
    "id" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "youtubeUrl" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VideoPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryImage" (
    "id" TEXT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "caption" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GalleryImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeeSchedule" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "academicSessionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeeSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyFee" (
    "id" TEXT NOT NULL,
    "feeScheduleId" TEXT NOT NULL,
    "month" "FeeMonth" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "status" "FeeStatus" NOT NULL DEFAULT 'UNPAID',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthlyFee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "monthlyFeeId" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "paymentDate" DATE NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE INDEX "User_role_status_idx" ON "User"("role", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE INDEX "Student_classId_academicSessionId_deletedAt_idx" ON "Student"("classId", "academicSessionId", "deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "AuthSession_tokenHash_key" ON "AuthSession"("tokenHash");

-- CreateIndex
CREATE INDEX "AuthSession_userId_expiresAt_idx" ON "AuthSession"("userId", "expiresAt");

-- CreateIndex
CREATE INDEX "AuthSession_expiresAt_revokedAt_idx" ON "AuthSession"("expiresAt", "revokedAt");

-- CreateIndex
CREATE INDEX "PasswordResetOtp_userId_purpose_createdAt_idx" ON "PasswordResetOtp"("userId", "purpose", "createdAt");

-- CreateIndex
CREATE INDEX "PasswordResetOtp_expiresAt_consumedAt_invalidatedAt_idx" ON "PasswordResetOtp"("expiresAt", "consumedAt", "invalidatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Board_name_key" ON "Board"("name");

-- CreateIndex
CREATE INDEX "Class_boardId_sortOrder_idx" ON "Class"("boardId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Class_boardId_name_key" ON "Class"("boardId", "name");

-- CreateIndex
CREATE INDEX "Subject_classId_sortOrder_idx" ON "Subject"("classId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_classId_name_key" ON "Subject"("classId", "name");

-- CreateIndex
CREATE INDEX "Chapter_subjectId_sortOrder_idx" ON "Chapter"("subjectId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_subjectId_name_key" ON "Chapter"("subjectId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicSession_name_key" ON "AcademicSession"("name");

-- CreateIndex
CREATE INDEX "AcademicSession_isActive_idx" ON "AcademicSession"("isActive");

-- CreateIndex
CREATE INDEX "Teacher_deletedAt_idx" ON "Teacher"("deletedAt");

-- CreateIndex
CREATE INDEX "TeacherQualification_teacherId_sortOrder_idx" ON "TeacherQualification"("teacherId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherQualification_teacherId_name_key" ON "TeacherQualification"("teacherId", "name");

-- CreateIndex
CREATE INDEX "TeacherSubject_subjectId_idx" ON "TeacherSubject"("subjectId");

-- CreateIndex
CREATE INDEX "StudentSubject_subjectId_idx" ON "StudentSubject"("subjectId");

-- CreateIndex
CREATE INDEX "Enquiry_status_submittedAt_idx" ON "Enquiry"("status", "submittedAt");

-- CreateIndex
CREATE INDEX "Enquiry_phone_idx" ON "Enquiry"("phone");

-- CreateIndex
CREATE INDEX "Enquiry_email_idx" ON "Enquiry"("email");

-- CreateIndex
CREATE INDEX "MaterialCategory_chapterId_section_idx" ON "MaterialCategory"("chapterId", "section");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialCategory_chapterId_section_name_key" ON "MaterialCategory"("chapterId", "section", "name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialFile_storageKey_key" ON "MaterialFile"("storageKey");

-- CreateIndex
CREATE INDEX "MaterialFile_categoryId_sortOrder_idx" ON "MaterialFile"("categoryId", "sortOrder");

-- CreateIndex
CREATE INDEX "MaterialFile_access_idx" ON "MaterialFile"("access");

-- CreateIndex
CREATE INDEX "VideoPlaylist_subjectId_sortOrder_idx" ON "VideoPlaylist"("subjectId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "GalleryImage_storageKey_key" ON "GalleryImage"("storageKey");

-- CreateIndex
CREATE INDEX "FeeSchedule_academicSessionId_idx" ON "FeeSchedule"("academicSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "FeeSchedule_studentId_academicSessionId_key" ON "FeeSchedule"("studentId", "academicSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyFee_feeScheduleId_month_key" ON "MonthlyFee"("feeScheduleId", "month");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_monthlyFeeId_key" ON "Payment"("monthlyFeeId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_academicSessionId_fkey" FOREIGN KEY ("academicSessionId") REFERENCES "AcademicSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthSession" ADD CONSTRAINT "AuthSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetOtp" ADD CONSTRAINT "PasswordResetOtp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherQualification" ADD CONSTRAINT "TeacherQualification_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSubject" ADD CONSTRAINT "StudentSubject_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSubject" ADD CONSTRAINT "StudentSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialCategory" ADD CONSTRAINT "MaterialCategory_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialFile" ADD CONSTRAINT "MaterialFile_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MaterialCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoPlaylist" ADD CONSTRAINT "VideoPlaylist_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeeSchedule" ADD CONSTRAINT "FeeSchedule_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeeSchedule" ADD CONSTRAINT "FeeSchedule_academicSessionId_fkey" FOREIGN KEY ("academicSessionId") REFERENCES "AcademicSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyFee" ADD CONSTRAINT "MonthlyFee_feeScheduleId_fkey" FOREIGN KEY ("feeScheduleId") REFERENCES "FeeSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_monthlyFeeId_fkey" FOREIGN KEY ("monthlyFeeId") REFERENCES "MonthlyFee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Prisma schema cannot express a conditional unique constraint. Keep one active
-- academic session at the database boundary as required by the product rules.
CREATE UNIQUE INDEX "AcademicSession_one_active_key"
ON "AcademicSession" ("isActive")
WHERE "isActive" = true;
