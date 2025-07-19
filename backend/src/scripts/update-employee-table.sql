-- Add Email and Password columns to Employee table
ALTER TABLE "Employee" ADD COLUMN "Email" VARCHAR UNIQUE;
ALTER TABLE "Employee" ADD COLUMN "Password" VARCHAR NOT NULL DEFAULT 'temp_password';

-- Add a comment to explain the default password
COMMENT ON COLUMN "Employee"."Password" IS 'Default password, should be changed on first login'; 