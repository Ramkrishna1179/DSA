
  // .1) For creating and generating the migration in rust with diesel orm and Actix_web framework

     // a.) diesel setup   ->  
    // This command will create the migrations folder in root dir and it will also create the migration table in database.
    
    // b.) diesel generate migration name of the migration => diesel generate migration mymigration 
   // This will create the the new migration with our specified name and inside this we wiil have up.sql and down.sql so inside this files we will write the code for creating and deleting the table from the database.
   
    //  c.) diesel migration run mymigration ->
   // This command will create the table in the database with our specified columns. 
   




   
   // .2) Rabbitmq instalaltion video on ubuntu = https://www.youtube.com/watch?v=eazz-Je4HAA




   // 3.) Drop the column from the table 

// # Log into the PostgreSQL database
// sudo -i -u postgres
// psql -d rust_crud

// # Drop the confirm_password column
// ALTER TABLE users DROP COLUMN confirm_password;

//this above command adds the new column in the database table.
//ALTER TABLE users ADD COLUMN confirm_password character varying NOT NULL;

// # Exit the postgres user shell
// exit

// # Navigate to your project directory
// cd /home/imentus/Videos/All_Work/rust_crypto_ex/rust_auth

// # Regenerate the Diesel schema
// diesel print-schema > src/schema.rs
// Verify Changes in schema.rs
// After running these commands, open the src/schema.rs file and ensure that the confirm_password column is no longer present in the users table definition.

// Update Your Rust Code
// Since the confirm_password column is no longer part of the database schema, you should also update your Rust code to remove any references to this column:

// Remove confirm_password from the NewUser struct:

// Update the signup Function:


// This process will ensure that the confirm_password column is removed from both your database and your Rust project.Now we can run cargo build and cargo run for running the project.



// .4) 
// To change the password_hash column to password in your database using Diesel migrations, you would typically follow these steps:

// Create a New Migration: Generate a new migration using Diesel CLI. This migration will contain the SQL commands to rename the column.

 
// diesel migration generate rename_password_hash_to_password
// Edit the Up Migration File: Open the newly created migration's up.sql file and write the SQL command to rename the column. The command should look something like this:

 
// ALTER TABLE users RENAME COLUMN password_hash TO password;
// Edit the Down Migration File (Optional): Open the down.sql file of the new migration and write the SQL command to revert the rename operation if needed. This command would be:

 
// ALTER TABLE users RENAME COLUMN password TO password_hash;
// Run the Migration: Apply the migration to your database using Diesel CLI.

 
// diesel migration run
// Verify the Changes: Check your database schema to ensure that the column has been renamed successfully.

// Update Your Rust Code: Update your Rust code to reflect the new column name. If you're using the password_hash column in your code, you'll need to change it to password.

// Recompile Your Rust Project: After updating your code, recompile your Rust project to ensure that everything works correctly.

// Test Your Application: Test your application thoroughly to ensure that the column rename hasn't introduced any issues.

// By following these steps, you should be able to rename the password_hash column to password in your database using Diesel migrations.