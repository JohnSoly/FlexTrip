Here is a simple guide to set up the FlexTrip database, which involves creating the table structure and then adding a default admin user for testing.

How to Set Up the Database
This is a two-step process. You must run the scripts in this order:

Run schema.sql: This creates all the empty tables, columns, and relationships.

Run init_admin_user.sql: This adds the default admin user data into the tables you just created.

Step 1: Create the Database Schema
Assuming you have a file named schema.sql in your main FlexTrip project folder, run these two commands from your terminal:

Copy the schema file into the container:

docker cp schema.sql flextrip_db:/schema.sql


Execute the schema script inside the container:

docker exec -it flextrip_db psql -U your_db_user -d flextrip_db -f /schema.sql


After this step, your database will have the complete table structure.

Step 2: Create the Admin User
Now that the tables exist, you can add the admin user.

Create the SQL file: On your computer, create a new file named init_admin_user.sql and paste the SQL commands below into it.

-- This script creates the necessary records for a default Admin user.

-- Step 1: Create an Admin Role
INSERT INTO "Role" ("RoleName", "RoleDescription")
VALUES ('Admin', 'Administrator role');

-- Step 2: Create an Admin Team
INSERT INTO "Team" ("TeamName", "TeamDescription")
VALUES ('Admin Team', 'Administrative team');

-- Step 3: Create the Admin Employee
-- The password is 'admin 123' (stored as a secure hash).
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
) VALUES (
  'Admin',
  'User',
  'admin@flextrip.com',
  '$2b$10$bJp9bKBm2eASarO95vFAh.0413Cld0zH.R1uAHTJuuysHRGIdMT6O',
  '1234567890',
  'ADMIN001',
  CURRENT_DATE,
  1,  -- This must match the RoleID created above
  1   -- This must match the TeamID created above
);


Copy the user file into the container:

docker cp init_admin_user.sql flextrip_db:/init_admin_user.sql


Execute the user script inside the container:

docker exec -it flextrip_db psql -U your_db_user -d flextrip_db -f /init_admin_user.sql


Admin User Credentials
The database is now fully set up. You can use the following credentials to sign in to the application:

Username: admin@flextrip.com

Password: admin123