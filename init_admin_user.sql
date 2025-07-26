-- Step 1: Insert Admin Role
INSERT INTO "Role" ("RoleName", "RoleDescription")
VALUES ('Admin', 'Administrator role')
ON CONFLICT ("RoleName") DO NOTHING;

-- Step 2: Insert Admin Team
INSERT INTO "Team" ("TeamName", "TeamDescription")
VALUES ('Admin Team', 'Administrative team')
ON CONFLICT ("TeamName") DO NOTHING;

-- Step 3: Insert Admin Employee
INSERT INTO "Employee" (
  "FirstName",
  "LastName",
  "username",
  "password",
  "PhoneNumber",
  "NationalID",
  "JoinedDate",
  "RoleID",
  "TeamID"
)
SELECT
  'Admin',
  'User',
  'admin',
  '$2b$10$bJp9bKBm2eASarO95vFAh.0413Cld0zH.R1uAHTJuuysHRGIdMT6O', -- hashed admin123
  '1234567890',
  'ADMIN001',
  CURRENT_DATE,
  (SELECT "RoleID" FROM "Role" WHERE "RoleName" = 'Admin'),
  (SELECT "TeamID" FROM "Team" WHERE "TeamName" = 'Admin Team')
WHERE NOT EXISTS (
  SELECT 1 FROM "Employee" WHERE "PhoneNumber" = '1234567890'
);
